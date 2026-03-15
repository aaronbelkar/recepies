-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Define custom Enums
CREATE TYPE "ComplexityType" AS ENUM ('Beginner', 'Normal', 'Complex');
CREATE TYPE "LabelType" AS ENUM ('Kids Friendly', 'Healthy', 'Vegan');
CREATE TYPE "MaterialType" AS ENUM ('Fish', 'Meat', 'Vegetables', 'Dairy');
CREATE TYPE "DishType" AS ENUM ('Stew', 'Soup', 'Baked', 'Desert');
CREATE TYPE "SpicyType" AS ENUM ('Not Spicy', 'Spicy', 'Hot');
CREATE TYPE "UserRole" AS ENUM ('admin', 'user');

-- Create Tables

-- Table: users
CREATE TABLE "users" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4() REFERENCES auth.users(id) ON DELETE CASCADE,
  "email" TEXT UNIQUE NOT NULL,
  "full_name" TEXT,
  "role" "UserRole" DEFAULT 'user',
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Table: recipes
CREATE TABLE "recipes" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "title" TEXT NOT NULL,
  "image_url" TEXT NOT NULL,
  "instructions" JSONB NOT NULL,
  "ingredients" JSONB NOT NULL,
  "complexity" "ComplexityType",
  "label" "LabelType",
  "main_material" "MaterialType",
  "type" "DishType",
  "spicy" "SpicyType",
  "prep_time_minutes" INTEGER,
  "servings" INTEGER,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Table: favorites
CREATE TABLE "favorites" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" UUID REFERENCES "users"(id) ON DELETE CASCADE,
  "recipe_id" UUID REFERENCES "recipes"(id) ON DELETE CASCADE,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
  UNIQUE("user_id", "recipe_id")
);

-- Table: comments
CREATE TABLE "comments" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "recipe_id" UUID REFERENCES "recipes"(id) ON DELETE CASCADE,
  "user_id" UUID REFERENCES "users"(id) ON DELETE CASCADE,
  "content" TEXT NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Table: newsletter_subscribers
CREATE TABLE "newsletter_subscribers" (
  "email" TEXT PRIMARY KEY,
  "subscribed_at" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Enable Row Level Security
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "recipes" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "favorites" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "comments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "newsletter_subscribers" ENABLE ROW LEVEL SECURITY;

-- Security & Access (RLS) Rules

-- Rule 1 (Recipes): Public data is READ-ONLY for everyone. Only Admins can INSERT/UPDATE/DELETE.
CREATE POLICY "Recipes are viewable by everyone" ON "recipes"
  FOR SELECT USING (true);

-- Assuming auth.jwt() -> 'role' or checking user table role.
-- For simplicity using a function or joining, but direct checking if custom claims used.
-- We'll assume admin check function exists or we check `users` table
CREATE POLICY "Recipes are editable by admins only" ON "recipes"
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM "users" WHERE "users"."id" = auth.uid() AND "users"."role" = 'admin'
    )
  );

-- Rule 2 (Favorites): Users can only INSERT and DELETE their own data. Public cannot see other's favorites.
CREATE POLICY "Users can manage their own favorites" ON "favorites"
  FOR ALL USING (auth.uid() = "user_id");

-- Rule 3 (Comments): Users can INSERT and DELETE their own data. Public users can SELECT.
CREATE POLICY "Comments are viewable by everyone" ON "comments"
  FOR SELECT USING (true);

CREATE POLICY "Users can manage their own comments" ON "comments"
  FOR ALL USING (auth.uid() = "user_id");

-- Rule 4 (Users): Users can read/update their own profile
CREATE POLICY "Users can view and edit their own profile" ON "users"
  FOR ALL USING (auth.uid() = "id");

-- Rule 5 (Newsletter): Anyone can INSERT, but SELECT is Admin only
CREATE POLICY "Anyone can subscribe to newsletter" ON "newsletter_subscribers"
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Newsletter viewable by admins only" ON "newsletter_subscribers"
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM "users" WHERE "users"."id" = auth.uid() AND "users"."role" = 'admin'
    )
  );
