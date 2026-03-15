# 🏗️ System Architecture: המתכונים של מרינה (Marina's Recipes)

> **Infrastructure Overview:** This document maps the external services, cloud providers, and data flow of the application. It ensures Jules and Antigravity understand the boundaries of the "Vibe Coding" environment.

---

## 1. High-Level Architecture
*Describe the macroscopic view of the system.*

- **Environment:** Vercel (Frontend & Serverless) and Supabase (Backend/DB).
- **Deployment Strategy:** Git-push to deploy via GitHub, utilizing Vercel Preview branches for Vibe-Checks and UI testing.
- **Global Distribution:** Vercel Edge Network to ensure fast loading of the Hebrew interface and recipe images.

---

## 2. Infrastructure Components
*The 'Lego blocks' that make up the system.*

| Layer | Service Provider | Role/Function |
| :--- | :--- | :--- |
| **Hosting** | Vercel | Frontend rendering (Next.js) & Serverless API API routes. |
| **Primary Database** | Supabase (PostgreSQL) | Storing recipes, categories, comments, favorites, and user profiles. |
| **Authentication** | Supabase Auth | Managing user sessions, email/password logins, and securing protected routes. |
| **Storage** | Supabase Storage | Hosting high-quality, appetizing recipe images and user avatars. |
| **Email Service** | Resend | Handling transactional emails and newsletter subscription confirmations. |

---

## 3. Data Flow & Integration
*How data moves between services.*

- **Client to Server:** Next.js React Server Components (RSC) fetch public recipe data directly from Supabase for fast, SEO-optimized page loads. Next.js Server Actions handle mutations (e.g., adding a comment, toggling a favorite).
- **Filtering Logic:** Advanced database queries in Supabase to handle the multi-parameter URL filters (Complexity, Label, Main Material, Type, Spicy).
- **Newsletter:** Server Action captures the user's email and pushes it to the Supabase database and external email service (Resend).

---

## 4. MCP (Model Context Protocol) Servers
*Active MCP servers your agents should use to interact with the world.*

- **Supabase MCP:** For direct database schema exploration and executing migrations during the Vibe Coding process.

---

## 5. Security & Auth Pattern
*Defining access control.*

- **RBAC (Role-Based Access Control):** - **Admin (Marina):** Full CRUD (Create, Read, Update, Delete) access to all recipes.
  - **Authenticated Users:** Can Read all recipes, Create/Delete their own comments, and Create/Delete their own favorites.
  - **Public Users:** READ-ONLY access to the recipe catalog. Cannot comment or favorite.
- **Row Level Security (RLS):** Strictly enforced at the Supabase PostgreSQL level to ensure users can only modify their own comments and favorites.

---

## 6. External APIs & Services
*Third-party integrations.*

- **Resend:** For sending welcome emails to new users and broadcasting the recipe newsletter.