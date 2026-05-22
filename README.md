# Mohammed Saalihi Ali Portfolio

Premium React + Vite portfolio for Mohammed Saalihi Ali, an AI & Data Science student and MERN Stack Developer.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- EmailJS contact form

## Project Structure

```text
myportfolio/
  public/
    favicon.svg
    og-preview.svg
    resume.pdf
  src/
    App.jsx
    data.js
    main.jsx
    motion.js
    sections.jsx
    styles.css
  .env.example
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
```

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Contact Form Setup

This project uses EmailJS so the form works after static deployment on Vercel, Netlify, GitHub Pages, or any Vite host.

1. Create an EmailJS account at `https://www.emailjs.com/`.
2. Add an email service and copy the Service ID.
3. Create an email template with these variables:

```text
from_name
from_email
subject
message
to_email
```

4. Copy the Template ID and Public Key.
5. Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

6. Fill the values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=your-email@example.com
VITE_RESUME_URL=/resume.pdf
```

Restart the dev server after editing `.env`.

## Deployment

### Vercel

- Build command: `npm run build`
- Output directory: `dist`
- Add the `VITE_EMAILJS_*` variables in Project Settings.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Add the `VITE_EMAILJS_*` variables in Site configuration.

## Customization Checklist

- Replace `public/resume.pdf` with the final resume.
- Replace GitHub and LinkedIn links in `src/data.js`.
- Replace project placeholder URLs in `src/data.js`.
- Replace the hero profile placeholder with a real image if available.
