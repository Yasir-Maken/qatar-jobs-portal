# 🌐 Job Portal Landing Page

This repository contains the **front-end** for a modern job portal web application.  
Currently, it features a **single-page landing page** designed to attract users and handle initial **sign-up** and **sign-in**.

---

## 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org/)** – Server-side rendering, routing, and modern React framework features.
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid, responsive UI development.
- **[shadcn/ui](https://ui.shadcn.com/)** – Accessible, customizable React components built with Radix UI + Tailwind.
- **[Clerk](https://clerk.com/)** – Authentication and user management (sign-up, sign-in, social logins).

---

## 🏗️ Project Structure & Status

The app is focused and minimal, built around a **landing page** with a two-column layout:

- **Left Column** → Clerk-powered authentication (sign-up form + social login).
- **Right Column** → Hero section with headline + imagery showcasing the job portal's value proposition.

This provides a solid **starting point** for a full job portal by covering the **first user interaction**.

---

## ⚙️ Getting Started

Follow the steps below to run the project locally.

### ✅ Prerequisites

- [Node.js (LTS)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

### 🔧 Installation

1. **Clone the repository**

   ````bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name

    ```npm install```
   ````

# or

    ```yarn install```

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

npm run build
npm run start
