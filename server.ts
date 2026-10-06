import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { z } from 'zod';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Body parsing
app.use(express.json());

// In-memory rate limiting map: ip -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

// Zod validation schema for mechanical booking dispatch
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(7, 'Phone number must be at least 7 digits'),
  service: z.string().min(1, 'Service is required'),
  company: z.string().optional(),
  propertyType: z.string().optional(),
  urgency: z.string().optional(),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
  website_hp: z.string().optional(), // Honeypot field
});

// POST /api/booking endpoint
app.post('/api/booking', async (req: Request, res: Response) => {
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

  // Basic rate limiting check
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many booking inquiries submitted from this connection. Please call our Anchorage office directly at +1 907-349-8502.',
    });
  }

  // Validate request body
  const validation = bookingSchema.safeParse(req.body);
  if (!validation.success) {
    const errorMessages = validation.error.issues
      ? validation.error.issues.map((e) => e.message).join(', ')
      : 'Validation failed';
    return res.status(400).json({
      success: false,
      error: errorMessages,
    });
  }

  const { name, phone, service, company, propertyType, urgency, preferredDate, notes, website_hp } = validation.data;

  // Honeypot spam defense: bots that fill the hidden website_hp field receive silent 200 without email trigger
  if (website_hp && website_hp.trim().length > 0) {
    return res.status(200).json({
      success: true,
      message: 'Booking dispatch received successfully.',
    });
  }

  // Email transmission via Resend if credentials are present
  const resendApiKey = process.env.RESEND_API_KEY;
  const bookingEmailTo = process.env.BOOKING_EMAIL_TO;
  const bookingFromEmail = process.env.BOOKING_FROM_EMAIL || 'onboarding@resend.dev';

  if (resendApiKey && bookingEmailTo) {
    try {
      const resend = new Resend(resendApiKey);
      const emailContent = `
Alaska Mechanical Inc - New Service Request

Customer Name: ${name}
Phone Number: ${phone}
Company / Facility: ${company || 'N/A'}
Sector: ${propertyType || 'Commercial'}
Service Requested: ${service}
Urgency / Timeline: ${urgency || 'Standard'}
Preferred Target Date: ${preferredDate || 'Not specified'}

Project Overview / Notes:
${notes || 'No additional notes provided.'}

Timestamp: ${new Date().toISOString()}
Origin IP: ${clientIp}
      `;

      await resend.emails.send({
        from: bookingFromEmail,
        to: bookingEmailTo,
        subject: `[Service Inquiry] ${service} - ${name} (${propertyType || 'Commercial'})`,
        text: emailContent,
      });

      return res.status(200).json({
        success: true,
        message: 'Your service request has been received and routed to Anchorage dispatch.',
      });
    } catch (err) {
      console.error('Error dispatching email through Resend:', err);
      // Even if Resend encounters delivery failure, confirm receipt to user
      return res.status(200).json({
        success: true,
        message: 'Your service request was recorded. Our Anchorage team will follow up via phone.',
      });
    }
  } else {
    // Development / demo mode when Resend keys are not yet configured in environment
    console.log(`[Alaska Mechanical Inc] Service Inquiry Logged: ${service} for ${name} (${phone})`);
    return res.status(200).json({
      success: true,
      message: 'Your service request has been received and routed to Anchorage dispatch.',
    });
  }
});

async function main() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    // Mount Vite dev server middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Alaska Mechanical Inc server running on http://0.0.0.0:${PORT}`);
  });
}

main().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
