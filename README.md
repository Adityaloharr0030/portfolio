# Aditya Lohar | Full-Stack Developer Portfolio

A modern, high-performance portfolio website built with **Next.js 14** (App Router). This project was migrated from a static HTML/CSS/JS site to a component-based Next.js architecture while preserving all original animations and custom styles.

## 🚀 Features

- **Next.js 14 App Router**: Seamless navigation and optimized performance.
- **Modern Animations**: High-quality interactions using vanilla JavaScript (particles, custom cursor, sequential terminal typing, typed text).
- **Glassmorphism UI**: Sleek, modern design with custom CSS variables.
- **EmailJS Integration**: Real-time serverless contact form submissions.
- **Data-Driven Sections**: Projects and skills managed through React components for easy updates.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Vanilla CSS (globals.css)
- **UI Icons**: FontAwesome 6
- **Animations**: Custom Vanilla JS + Intersection Observer (AOS style)
- **Contact Form**: EmailJS

## 📧 Email Configuration (IMPORTANT)

The "Get in Touch" form requires **EmailJS** credentials to deliver messages to your inbox. 

To set it up:
1. Open [`components/Contact.jsx`](./components/Contact.jsx).
2. Replace the placeholders with your IDs from the [EmailJS Dashboard](https://www.emailjs.com/):
   ```javascript
   const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
   ```

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Server**:
   ```bash
   npm run dev
   ```

3. **Visit Site**:
   Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

The easiest way to deploy is through [Vercel](https://vercel.com/new). Simply connect your GitHub repository, and it will auto-deploy on every push.
