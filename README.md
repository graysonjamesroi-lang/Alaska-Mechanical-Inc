# Alaska Mechanical Inc

Cutting-edge corporate web platform for **Alaska Mechanical Inc**, an Anchorage-based mechanical contractor delivering commercial plumbing, heating systems, pipe fabrication, boiler room maintenance, and medical gas solutions across Alaska.

---

## Business Information

- **Company Name:** Alaska Mechanical Inc
- **Type:** Mechanical Contractor
- **Physical Facility:** 8540 Dimond D Cir, Anchorage, AK 99515, United States
- **Hours of Operation:** Monday – Friday, 7:30 AM – 4:00 PM AKST
- **Emergency Dispatch:** 24/7 Response Available for Critical Heating & Plumbing Failures
- **Direct Dispatch Telephone:** [+1 907-349-8502](tel:+19073498502)
- **Booking Inquiries:** Dispatched through internal automated routing (never displayed publicly)

---

## Architecture & Tech Stack

- **Framework:** Next.js (App Router) + TypeScript & Vite Full-Stack runtime
- **3D Visualization:** Three.js with custom transmission glass shaders, directional aurora environment lighting, cursor tracking, and scroll-linked rotation
- **Styling:** Tailwind CSS (v4) with sub-arctic aurora gradients, glassmorphism, and responsive typography
- **State & Animation:** Motion (Framer Motion) micro-interactions and smooth scroll orchestration
- **Data Validation:** Zod schema enforcement
- **Email Delivery:** Resend transactional API with honeypot bot defenses and rate limiting
- **SEO & Structured Data:** Semantic HTML5, Metadata API, OpenGraph cards, Twitter cards, and Schema.org `MechanicalContractor` LocalBusiness JSON-LD

---

## 34 Specialized Mechanical Services Included

1. Backflow Testing And Maintenance
2. Bath Remodel
3. Complete System Change Out
4. Construction Projects
5. Design Build/ Design Assist
6. Emergency Service
7. Facility Improvements
8. Full Design
9. Full Service Mechanical
10. Gas Heater Installation
11. Gas Line Repair
12. Health Care
13. Heating Improvements
14. Heating Servicing
15. Industrial Plumbing
16. Install Systems
17. Leak Repair
18. Maintenance And Repair
19. Maintenance Boiler Room
20. Mechanical Systems
21. Medical Gas
22. Pipe Fabrication
23. Plumbing & Mechanical
24. Plumbing And Heating
25. Plumbing Fixtures
26. Preventative Maintenance Agreements
27. Project Plans
28. Projects Projects
29. Repair & Replacement
30. Residential Plumbing
31. Servicing And Maintenance
32. Tenant Improvements
33. Valve Replacement
34. Water/Wastewater

---

## Deployment to Vercel

### Step 1: Push Repository to GitHub / GitLab / Bitbucket
Push this codebase to your Git repository:
```bash
git init
git add .
git commit -m "feat: Alaska Mechanical Inc platform with 3D hero and booking pipeline"
git branch -M main
git remote add origin https://github.com/<your-username>/alaska-mechanical.git
git push -u origin main
```

### Step 2: Import Project in Vercel
1. Log in to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** → **Project**.
3. Select your repository and click **Import**.
4. The framework will automatically detect **Next.js** (or Vite). If deploying with Next.js, verify the build command is `npm run build`.

### Step 3: Configure Environment Variables in Vercel
In the Vercel project settings under **Settings** → **Environment Variables**, add the following keys:

| Variable Name | Description | Example Placeholder |
|---------------|-------------|---------------------|
| `RESEND_API_KEY` | Your Resend API token | `re_123456789...` |
| `BOOKING_EMAIL_TO` | Private email where dispatched bookings are sent | `dispatch@yourdomain.com` |
| `BOOKING_FROM_EMAIL` | Verified sender email configured in Resend | `notifications@yourdomain.com` |
| `APP_URL` | Production website URL for canonical SEO | `https://alaskamechanical.com` |

*Note: For security and privacy, the destination booking address is kept private and injected exclusively via server-side environment variables.*

### Step 4: Deploy
Click **Deploy**. Vercel will build the project, optimize assets, generate edge and serverless route handlers, and provide your production URL with automatic SSL.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local server (Runs full-stack Express + Vite dev on port 3000)
npm run dev

# Run TypeScript validation
npm run lint

# Build production bundle
npm run build
```
