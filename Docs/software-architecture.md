# 💻 Software Architecture: המתכונים של מרינה (Marina's Recipes)

> **The Developer's Manifesto:** This document defines the internal logic, code standards, and folder structures of the application. It ensures that Antigravity and Jules write code that feels like it belongs to the same project.

---

## 1. Project Structure
*Define the map of the codebase for the agents.*

```text
/
├── /src
│   ├── /app            # Next.js App Router (Pages: Home, Recipe Details, Login, Profile)
│   ├── /components     # UI & Shared Components
│   │   ├── /ui         # Shadcn primitives (Buttons, Inputs with 8px soft edges)
│   │   └── /features   # Complex components (FilterSidebar, RecipeGrid, CommentSection)
│   ├── /lib            # Supabase client, Utility functions, Hebrew RTL helpers
│   ├── /hooks          # Custom React hooks (e.g., useFavorites, useFilters)
│   ├── /types          # TypeScript interfaces (Recipe, User, Comment)
│   └── /actions        # Next.js Server Actions (addComment, toggleFavorite, subscribe)
├── /public             # Static assets
└── /tests              # Integration tests