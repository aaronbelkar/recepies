# 📊 Data Schema: המתכונים של מרינה (Marina's Recipes)

> **The Source of Truth:** This document defines the database tables, relationships, and data types. It serves as the map for Jules and Antigravity to ensure data integrity and consistent backend logic.

---

## 1. Database Overview
*The high-level structure of your data storage.*

- **Type:** Relational (PostgreSQL)
- **Provider:** Supabase
- **ORM/Query Builder:** Supabase Client (PostgREST)

---

## 2. Core Tables / Collections
*Define the essential entities for the "Golden Loop."*

### Table: `users`
*Standard user profiles handled primarily by Supabase Auth.*

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Unique identifier linked to auth.users |
| `email` | String | Unique, Not Null | User email address |
| `full_name` | String | Optional | Display name for comments |
| `created_at` | Timestamp | Default: now() | Creation date |

### Table: `recipes`
*The core content of the application.*

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Unique identifier |
| `title` | String | Not Null | Hebrew recipe name |
| `image_url` | String | Not Null | Path to Supabase Storage image |
| `instructions` | JSONB | Not Null | Array of steps and ingredients |
| `complexity` | Enum | `ComplexityType` | Filtering tag (Beginner, Normal, Complex) |
| `label` | Enum | `LabelType` | Filtering tag (Kids Friendly, Healthy, Vegan) |
| `main_material`| Enum | `MaterialType` | Filtering tag (Fish, Meat, Vegetables, Dairy) |
| `type` | Enum | `DishType` | Filtering tag (Stew, Soup, Baked, Desert) |
| `spicy` | Enum | `SpicyType` | Filtering tag (Not Spicy, Spicy, Hot) |
| `created_at` | Timestamp | Default: now() | Publishing date |

### Table: `favorites`
*Join table for users saving recipes.*

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Unique identifier |
| `user_id` | UUID | FK -> users.id | The user saving the recipe |
| `recipe_id` | UUID | FK -> recipes.id | The saved recipe |
| `created_at` | Timestamp | Default: now() | When it was saved |

### Table: `comments`
*User feedback on specific recipes.*

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK, Default: uuid_generate_v4() | Unique identifier |
| `recipe_id` | UUID | FK -> recipes.id | The recipe being commented on |
| `user_id` | UUID | FK -> users.id | The author of the comment |
| `content` | Text | Not Null | The text of the comment |
| `created_at` | Timestamp | Default: now() | When the comment was posted |

### Table: `newsletter_subscribers`
*Email signups for the recipe newsletter.*

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `email` | String | PK, Unique | Subscriber email address |
| `subscribed_at`| Timestamp | Default: now() | Signup date |

---

## 3. Relationships (ERD Logic)
*How the tables talk to each other.*



- **One-to-Many:** `users` -> `comments` (One user can write many comments).
- **One-to-Many:** `recipes` -> `comments` (One recipe has many comments).
- **Many-to-Many:** `users` <-> `recipes` via `favorites` join table.
- **Cascade Rules:** On `recipes` deletion, delete all associated `comments` and `favorites`. On `users` deletion, delete their `comments` and `favorites`.

---

## 4. Enums & Custom Types
*Standardized values for the application.*

- `ComplexityType`: `['Beginner', 'Normal', 'Complex']`
- `LabelType`: `['Kids Friendly', 'Healthy', 'Vegan']`
- `MaterialType`: `['Fish', 'Meat', 'Vegetables', 'Dairy']`
- `DishType`: `['Stew', 'Soup', 'Baked', 'Desert']`
- `SpicyType`: `['Not Spicy', 'Spicy', 'Hot']`
- `UserRole`: `['admin', 'user']`

---

## 5. Security & Access (RLS)
*Row Level Security rules or API permission logic.*

- **Rule 1 (Recipes):** Public data is `READ-ONLY` for everyone. Only Admins can `INSERT/UPDATE/DELETE`.
- **Rule 2 (Favorites & Comments):** Users can only `INSERT` and `DELETE` their own data where `auth.uid() = user_id`. Public users can `SELECT` (read) comments, but cannot read other users' favorites.
- **Rule 3 (Newsletter):** Anyone can `INSERT` their email, but `SELECT` is restricted to Admins only.

---

## 6. Migration & Seeding
- **Migrations Folder:** `/supabase/migrations`
- **Seed Data:** Defined in `seed.sql` to populate initial filter categories and test recipes for local development.