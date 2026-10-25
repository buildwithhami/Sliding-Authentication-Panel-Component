# Sliding Authentication Panel Component

A production-ready, interactive, and modern sliding authentication component built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS v4**. 

Designed specifically for open-source UI libraries, modern SaaS startups, and developer showcases. It seamlessly transitions between **Sign In** and **Sign Up** state flows using a high-performance sliding banner, pure declarative state management, zero imperative DOM access, and modern responsive layout principles.

---

## Features

- **Smooth Sliding Visual Panel**: A responsive backdrop visual panel that slides smoothly across the screen on state change.
- **Pure Declarative React State**: Zero `document.getElementById` or direct DOM mutations; hydration-safe for Next.js App Router.
- **Tailwind CSS v4 Compatible**: Configured using modern `@theme inline` directive and design variables.
- **Interactive Password Visibility Toggle**: Independent state management for both Login and Signup password visibility.
- **Full Responsive Design**: Automatically collapses into a unified single-column flow on mobile and portrait aspect ratios while disabling background sliding logic.
- **Custom Browser Autofill Override**: Prevents unwanted Chrome/Safari blue/yellow autofill background color overrides via pure CSS rules.
- **Typography Integration**: Built with `Plus Jakarta Sans` typography via Google Fonts integration.

---

## Recommended Project File Structure

Ensure your Next.js project matches the following clean folder layout:

```text
my-glass-app/
├── app/
│   ├── globals.css          # Global CSS, Font Imports & Tailwind v4 Theme
│   ├── layout.tsx           # Root Layout Definition
│   └── page.tsx             # Root Page rendering <AuthPanel/>
├── components/
│   └── AuthPanel.tsx        # Main Production Authentication Component
├── public/
│   └── image-login.png      # Sliding Banner Image Asset
└── package.json
```

## Quick Start & Installation

### 1. Prerequisites
Ensure you have a **Next.js 13+ / 14+ / 15+** project running with **Tailwind CSS v4** and **TypeScript**.

### 2. Copy Font Configuration
In your `app/globals.css`, make sure you import **Plus Jakarta Sans** and configure the Tailwind theme variables:

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: 'Plus Jakarta Sans', sans-serif;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Browser Autofill Background Override Fix */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
    -webkit-text-fill-color: #1c1917 !important;
    transition: background-color 5000s ease-in-out 0s;
}
```

## Customization & Branding

- **Brand Logo:** Replace the inline SVG inside `components/AuthPanel.tsx` (in both Sign In and Sign Up panel views) with your own project logo or image asset.
- **Side Panel Image:** Replace `public/image-login.png` with your custom promo or authentication side banner image.
