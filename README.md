# Aditya Lohar | Neural Protocol Portfolio

An ultra-premium, high-fidelity portfolio website built with **Next.js 16 (Turbopack)**. This system implements the "Neural Protocol" design language, a strict 8px-based stealth-tech aesthetic.

## 📡 System Features

- **Neural Protocol Design System**: Custom 8px-based spacing grid with centralized design tokens.
- **Next.js 16 Turbopack**: Blazing-fast development and optimized production builds.
- **Cinematic Interactions**: Terminal-style boot sequences, 3D hover parallax, and shimmering border effects.
- **Modular Architecture**: 100% componentized logic using TypeScript and scoped CSS Modules.
- **Secure Communication**: Real-time serverless contact portal integrated with EmailJS.

## 🛠️ Performance Tech Stack

- **Framework**: Next.js 16.1.7 (App Router)
- **Styling**: Vanilla CSS Modules + Design Tokens
- **Icons**: FontAwesome 6 (Neural Style)
- **Deployment**: Vercel

## 🔗 Documentation

For a detailed technical readout of what is in the system, how components are connected, and how the operational logic works, please refer to:

👉 **[SYSTEM_STATUS.md](./SYSTEM_STATUS.md)**

---

## 💻 Technical Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Secure Handsake (EmailJS)**:
   Add your keys to `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
   ```

3. **Initialize Dev Server**:
   ```bash
   npm run dev
   ```

4. **Access Protocol**:
   Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment Logic

The system is optimized for **Vercel**. Connect your repository for automated CI/CD protocols.
