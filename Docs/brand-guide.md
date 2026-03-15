# 🎨 Brand Guide: המתכונים של מרינה (Marina's Recipes)

> **Core Aesthetic:** [Pending User Input - e.g., Warm Earth Tones / Clean Minimalist]
> **Primary Goal:** To make browsing recipes appetizing, clear, and easy to read in Hebrew (RTL).

---

## 1. Visual Language & "The Vibe"
*This section tells the AI how the product should 'feel' during a Visual Sprint.*

- **Keywords:** [Pending User Input - e.g., Appetizing, Clean, Accessible, Friendly]
- **Design Metaphor:** "A well-organized, welcoming home kitchen."
- **Standard Radius:** [Pending User Input - e.g., 8px (Modern)]

---

## 2. Color Palette
*Used by Antigravity to configure Tailwind or CSS variables.*

| Role | Hex/Tailwind Class | Description |
| :--- | :--- | :--- |
| **Primary** | `[Pending User Input]` | Main brand color (Buttons, active filter tags) |
| **Secondary** | `[Pending User Input]` | Accents and highlights (e.g., Spicy warning tags) |
| **Background** | `[Pending User Input]` | Main page background (e.g., Off-white/Cream for less eye strain) |
| **Surface** | `[Pending User Input]` | Recipe Cards, Modals, and Popovers (Usually pure white) |
| **Text (Main)** | `[Pending User Input]` | High readability for recipe instructions (Dark Charcoal, not pure black) |
| **Text (Muted)** | `[Pending User Input]` | Descriptions and ingredient measurements |

---

## 3. Typography
*Defines the hierarchy for headers and body text.*

- **Language Support:** Must fully support Hebrew characters.
- **Headings:** [e.g., Heebo, Rubik, or Assistant - Bold]
- **Body:** [e.g., Assistant or Varela Round - Regular]

---

## 4. UI Components & Patterns
*Specific rules for the AI to follow when building elements.*

- **Directionality:** **Strictly RTL (Right-to-Left)**. All icons, margins, and text alignments must reflect standard Hebrew UI patterns.
- **Recipe Cards:** High-quality image emphasis at the top, clear title, and visually distinct tags for the filters (Complexity, Label, Main Material, Type, Spicy).
- **Filter Tags:** Pill-shaped tags that are easily tappable. Active state should use the Primary color.
- **Spacing:** Spacious (16px-24px) to ensure the interface doesn't feel cluttered when multiple filters are visible.

---

## 5. Imagery & Iconography
*Rules for icons and photos.*

- **Icon Set:** Lucide-react (RTL mirrored where appropriate).
- **Image Style:** High-quality, bright food photography. Essential to make the dishes look appetizing.

---

## 6. Vibe-Check Examples
*Describe what a 'Good' vs 'Bad' implementation looks like.*

- ✅ **Good:** "A clean grid of recipe cards with clear, colorful filter tags (e.g., 'Vegan' in green, 'Spicy' in red) and RTL text alignment."
- ❌ **Bad:** "Left-aligned text, small unreadable Hebrew fonts, and no visual distinction between a 'Beginner' recipe and a 'Complex' one."