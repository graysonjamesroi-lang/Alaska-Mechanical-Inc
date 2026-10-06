import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Booking validation schema
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

// Basic rate limiting tracking: IP -> timestamps
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const times = rateLimitStore.get(ip) || [];
  const validTimes = times.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (validTimes.length >= MAX_REQUESTS) {
    rateLimitStore.set(ip, validTimes);
    return false;
  }

  validTimes.push(now);
  rateLimitStore.set(ip, validTimes);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please call our Anchorage office directly at +1 907-349-8502.',
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = bookingSchema.safeParse(body);

    if (!result.success) {
      const issues = result.error.issues
        ? result.error.issues.map((e) => e.message).join(', ')
        : 'Invalid submission data';
      return NextResponse.json({ success: false, error: issues }, { status: 400 });
    }

    const { name, phone, service, company, propertyType, urgency, preferredDate, notes, website_hp } =
      result.data;

    // Honeypot spam trap: if website_hp is filled, silently succeed
    if (website_hp && website_hp.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Inquiry received.' }, { status: 200 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.BOOKING_EMAIL_TO;
    const fromEmail = process.env.BOOKING_FROM_EMAIL || 'onboarding@resend.dev';

    if (resendKey && toEmail) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `[Service Booking] ${service} - ${name} (${propertyType || 'Commercial'})`,
        text: `
Alaska Mechanical Inc - Service Booking Request

Customer: ${name}
Phone: ${phone}
Company/Facility: ${company || 'N/A'}
Property Type: ${propertyType || 'Commercial'}
Service Requested: ${service}
Urgency: ${urgency || 'Standard'}
Preferred Target Date: ${preferredDate || 'Not specified'}

Project Notes:
${notes || 'None provided'}

Received from IP: ${ip}
        `.trim(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your service request has been transmitted to our Anchorage operations queue.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to process inquiry. Please call +1 907-349-8502.',
      },
      { status: 500 }
    );
  }
}
