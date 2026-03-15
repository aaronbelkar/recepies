# 🚀 Product Specification: המתכונים של מרינה (Marina's Recipes)

> **The Vibe:** Warm, Homey, Family-Friendly, and Clean
> **Status:** v1.0
> **Primary AI Stack:** Next.js (App Router), Tailwind CSS, Shadcn UI, Supabase, Vercel

---

## 1. The North Star (Vision)
*This section defines the "Soul" of the project. Focus on the core problem.*

- **The "One Thing":** To provide a seamless, Hebrew-first recipe browsing experience where home cooks can instantly find the perfect dish based on dietary needs, ingredients, and time, while building a community through favorites and comments.
- **Success Looks Like:** A user can apply multiple filters, find a relevant recipe to cook in under 60 seconds, and easily save it to their profile.
- **Target Audience:** Home cooks, busy parents, and individuals looking for specific meal types (vegan, healthy, kid-friendly) in a warm, welcoming Hebrew interface.

---

## 2. The Golden Loop (User Journey)
*Detail the primary workflow. This is the logic the AI will prioritize.*

1. **Trigger:** The user opens the app looking for meal inspiration or a specific type of dish.
2. **Action:** The user applies a combination of detailed filters (Complexity, Label, Main Material, Type, Spiciness) using the URL-synced UI.
3. **Feedback:** The UI instantly updates to display appetizing recipe cards matching the selected criteria.
4. **Value:** The user logs in to add the recipe to their favorites, reads clear instructions/ingredients, leaves a comment, or subscribes to the newsletter.

---

## 3. Aesthetic & UI Guidelines
*This helps the "Visual Sprint" workflow stay on brand.*

- **Visual Keywords:** Warm, Homey, Clean, Modern, Appetizing
- **Language:** Hebrew (RTL - Right to Left layout is mandatory).
- **Color Palette:** Terracotta/Orange (Primary), Off-white/Cream backgrounds, Charcoal text.
- **Typography:** Modern Sans-serif with full Hebrew support (e.g., Assistant, Heebo).
- **Animation Feel:** Modern with soft edges (8px standard radius for cards and buttons).

---

## 4. Functional Requirements (P0/P1)
*List features. P0 is mandatory; P1 is "Nice to have."*

### [P0] Core Features (The Must-Haves)
- [ ] **Hebrew RTL Interface:** The entire UI must be optimized for Right-to-Left reading.
- [ ] **Advanced Filtering Engine:** Ability to filter recipes by:
  - Complexity: Beginner, Normal, Complex
  - Label: Kids Friendly, Healthy, Vegan
  - Main Material: Fish, Meat, Vegetables, Dairy
  - Type: Stew, Soup, Baked, Desert
  - Spicy: Not Spicy, Spicy, Hot
- [ ] **Recipe Details Page:** Displays image, title, ingredients list, and step-by-step instructions.

### [P1] Secondary Features (The Should-Haves)
- [ ] **User Authentication:** Sign up/Log in functionality via Supabase Auth.
- [ ] **Favorites System:** Logged-in users can bookmark recipes to their personal profile.
- [ ] **Comments Section:** Logged-in users can leave feedback on recipe pages.
- [ ] **Newsletter Subscription:** Capture emails to send recipe updates via Resend.

---

## 5. Technical Guardrails & Architecture
*The "Law of the Land" for Jules and Antigravity.*

- **Frontend:** React, Next.js App Router, Tailwind CSS, Shadcn UI
- **Backend/Storage:** Supabase (PostgreSQL, Auth, Storage), Vercel
- **External APIs:** Resend (for newsletter and transactional emails)
- **State Management:** URL Search Params for Filters (`useSearchParams`), React Server Components for data fetching
- **Folder Structure:** Feature-based or Atomic Design in `/components`

---

## 6. Anti-Goals (Constraints)
*What we are NOT building right now.*

- [Constraint 1: No user-submitted recipes. Only Admin (Marina) can publish new recipes.]
- [Constraint 2: No complex, professional chef tutorials; keep the content accessible for everyday home cooks.]

---

## 7. The Vibe-Check Log
*A space to track how the project "evolved" during the build.*

- **[Current Date]:** Core spec created. Added user authentication, favorites, comments, and newsletter functionality to the initial filtering roadmap.