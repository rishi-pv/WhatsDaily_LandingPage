# WhatsDaily Landing Page

Welcome to the repository for **WhatsDaily**, the sleek and modern landing page for the WhatsApp newsletter that delivers premium news directly to your inbox. This project is built using **Next.js** and **Tailwind CSS**.

## 🚀 Live Demo
https://whatsdaily.vercel.app/

## 📄 Project Overview

**WhatsDaily** offers a seamless way to stay informed with daily news updates delivered directly to WhatsApp. The landing page showcases the service, highlighting its features, subscription plans, and call-to-action sections. 

### Key Features
- **Modern Design:** A sleek, minimalistic design that offers a clean and intuitive user experience.
- **Responsive Layout:** The page is fully responsive, ensuring compatibility across all devices.
- **Fast Performance:** Built with Next.js, the landing page is optimized for speed and performance.
- **SEO Friendly:** Tailored for SEO, ensuring the landing page ranks well on search engines.

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Images:** SVGs for optimized performance

## 🧩 Project Structure

```plaintext
whatsdaily-landing-page/
├── .next/              # Next.js build output
├── node_modules/       # Node.js modules
├── public/             # Static assets (favicon, SVGs)
├── src/                # Source files
│   ├── app/            # Application entry point
│   │   ├── globals.css # Global CSS
│   │   ├── layout.tsx  # Main layout file
│   │   └── page.tsx    # Homepage component
│   └── sections/       # Sections for different parts of the landing page
│       └── Header.tsx  # Header component
│       └── CallToAction.tsx # Call to Action section
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Files to be ignored by Git
├── next.config.mjs     # Next.js configuration
├── package.json        # NPM package file
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.x or later)
- **pnpm** (v7.x or later)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/whatsdaily-landing-page.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd whatsdaily-landing-page
   ```
3. **Install dependencies:**
   ```bash
   pnpm install
   ```
4. **Run the development server:**
   ```bash
   pnpm dev
   ```
5. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Building for Production

To create an optimized production build, run:

```bash
pnpm build
```

This will generate the production-ready files in the `.next/` directory.

## 🚀 Deployment

This project is ready to be deployed to services like Vercel, Netlify, or any other platform that supports Next.js.

### Deploying to Vercel

1. **Install Vercel CLI:**
   ```bash
   pnpm i -g vercel
   ```
2. **Run the deployment command:**
   ```bash
   vercel
   ```
3. Follow the prompts to deploy your application.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines first.

## 🛠️ Issues

If you encounter any issues or have feature requests, please feel free to open an issue on this repository.

## ✨ Acknowledgements

- Thanks to the developers of **Next.js** and **Tailwind CSS** for creating such powerful tools.
- Shoutout to the design inspirations from various UI/UX resources.
