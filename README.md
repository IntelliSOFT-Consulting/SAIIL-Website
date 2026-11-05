# SAIIL Website

The official website for the **Standards, Artificial Intelligence & Interoperability Lab (SAIIL)** — Africa's interoperability and innovation engine for digital health.

Built with **React 18**, **TypeScript**, **Vite**, and **React Router v7**.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
  - [Previewing Production Build](#previewing-production-build)
- [Contact Form & SMTP Setup](#contact-form--smtp-setup)
  - [How It Works](#how-it-works)
  - [Configuring Google SMTP](#configuring-google-smtp)
  - [Local Development vs. Production](#local-development-vs-production)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

SAIIL brings together open standards (FHIR, HL7, OpenHIE), artificial intelligence, conformance testing, and technical expertise to help health systems across Africa exchange data and work better together.

The website provides information on:
- **What We Do:** Core pillars spanning Open Standards, Capacity Building, and Country Programmes.
- **Interoperability Test Bed & Sandbox:** Conformance testing and validation tools for digital health systems.
- **Countries:** Ongoing national digital health implementations across Africa (Kenya, Rwanda, Zambia, Ethiopia, Burkina Faso).
- **Resources & Publications:** Implementation guides, whitepapers, tutorials, and technical documentations.
- **Contact:** Direct enquiry channel for ministries, partners, implementers, and researchers.

---

## Key Features

- ⚡ **Blazing Fast Performance:** Powered by Vite with sub-second HMR and optimized production bundling.
- 📱 **Fully Responsive:** Custom-crafted layouts optimized for mobile, tablet, and desktop viewing.
- 🔒 **Zero-Dependency Direct SMTP Mailer:** Built-in contact form delivering directly to designated inboxes via Google SMTP without third-party form SaaS, subscription fees, or activation requirements.
- 🛡️ **Spam Protection:** Automated honeypot trap to eliminate automated bot spam.
- 🧩 **Modular Architecture:** Clean separation of concerns across pages, shared components, and dedicated stylesheets.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (~5.6) |
| **Bundler & Tooling** | [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Styling** | Vanilla CSS (Scoped stylesheets with design tokens) |
| **Backend Mailer** | Native PHP 8.x stream socket client over SSL (Google SMTP) |

---

## Project Structure

```text
SAIIL-Website/
├── public/
│   ├── api/
│   │   ├── config.example.php   # Configuration template for SMTP credentials
│   │   ├── config.php           # Active SMTP credentials (ignored by git)
│   │   └── contact.php          # Direct Google SMTP mailer endpoint
│   ├── assets/                  # Country map outlines and SVG branding
│   ├── Logo/                    # Master logo assets
│   ├── Partners/                # Partner & Ministry logos
│   └── Resources/               # Test Bed screenshots & documentation assets
├── src/
│   ├── components/              # Shared UI components (Navbar, Footer, PageHero, etc.)
│   ├── data/                    # Static datasets (gallery, etc.)
│   ├── pages/                   # Application route views
│   │   ├── About.tsx            # About SAIIL, mission, vision, team
│   │   ├── Contact.tsx          # Contact enquiry form & direct contacts
│   │   ├── Countries.tsx        # Country implementations & programmes
│   │   ├── Home.tsx             # Homepage & interactive overview
│   │   ├── ResourceDetail.tsx   # Detailed publication view
│   │   ├── Resources.tsx        # Technical resources & guides catalog
│   │   ├── TestBed.tsx          # Conformance testing overview
│   │   ├── TestBedAccess.tsx    # Test Bed sandbox access request
│   │   └── WhatWeDo.tsx         # Core capabilities & offerings
│   ├── styles/                  # Component and page stylesheets
│   ├── App.tsx                  # Main route declarations
│   ├── main.tsx                 # React DOM root entrypoint
│   └── vite-env.d.ts            # Vite client type references
├── dist/                        # Production build output (generated)
├── vite.config.ts               # Vite configuration with local dev PHP mailer proxy
├── tsconfig.json                # TypeScript compiler configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **PHP**: v8.1 or higher *(optional, required for local contact form testing via PHP)*

### Installation

Clone the repository and install project dependencies:

```bash
git clone git@github.com:.../SAIIL-Website.git
cd SAIIL-Website
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000` (or `http://localhost:3001` if 3000 is occupied).

### Building for Production

Compile TypeScript and build the optimized production assets:

```bash
npm run build
```

The compiled files will be output to the `dist/` directory, including all static assets and the `dist/api/` backend scripts.

### Previewing Production Build

To preview the built production site locally:

```bash
npm run preview
```

---

## Contact Form & SMTP Setup

The contact page uses an open-source, self-hosted mailer located at `public/api/contact.php`. It sends form submissions directly via Google SMTP to the designated recipient address without relying on third-party form services.

### How It Works

1. The frontend form at [`src/pages/Contact.tsx`](src/pages/Contact.tsx) submits user inputs as JSON to `/api/contact.php`.
2. The mailer connects directly over an SSL stream socket to `ssl://smtp.gmail.com:465`.
3. It authenticates with your Google Workspace / Gmail account using a 16-character **Google App Password**.
4. The enquiry is formatted and delivered straight to the configured recipient email.

### Configuring Google SMTP

1. Generate a **Google App Password**:
   - Go to your Google Account security settings: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Ensure **2-Step Verification** is enabled on your Google account.
   - Enter an app name (e.g., `SAIIL Website`) and click **Create**.
   - Copy the generated 16-character password (e.g., `abcd efgh ijkl mnop`).

2. Create `public/api/config.php` (if not already present):
   ```bash
   cp public/api/config.example.php public/api/config.php
   ```

3. Update `public/api/config.php` with your credentials:
   ```php
   <?php
   if (!defined('SAIIL_APP')) {
       http_response_code(403);
       exit('Access Denied');
   }

   return [
       'smtp_host' => 'smtp.gmail.com',
       'smtp_port' => 465,
       'smtp_user' => '...@....com',     // Google Workspace / Gmail address
       'smtp_pass' => 'YOUR_16_CHAR_APP_PASSWORD',     // 16-character Google App Password
       'to_email'  => '...@saiil.africa',     // Recipient address for form inquiries
       'to_name'   => 'SAIIL Team',
       'from_name' => 'SAIIL Website Contact Form',
   ];
   ```

> [!NOTE]
> `public/api/config.php` is listed in `.gitignore` to ensure your SMTP credentials are never committed to version control.

### Local Development vs. Production

- **In Local Development (`npm run dev`):**
  Vite's configuration in `vite.config.ts` includes `phpContactApiPlugin`, which intercepts `/api/contact.php` requests and executes `public/api/contact.php` via local PHP. This enables complete end-to-end form testing during local development.

- **In Production (LiteSpeed / Apache / Nginx):**
  When deployed, the web server executes `/api/contact.php` natively.

---

## Deployment

The production site is hosted on a **LiteSpeed** web server at `https://saiil.africa`.

1. Generate production assets:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist/` directory to the server's document root (e.g., `public_html/`).
3. Ensure `dist/api/config.php` exists on the server with your production SMTP credentials.

---

## License

This project is maintained for the Standards, Artificial Intelligence & Interoperability Lab (SAIIL). All rights reserved.
