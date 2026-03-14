export type ComplexityType = "Beginner" | "Normal" | "Complex";
export type LabelType = "Kids Friendly" | "Healthy" | "Vegan";
export type MaterialType = "Fish" | "Meat" | "Vegetables" | "Dairy";
export type DishType = "Stew" | "Soup" | "Baked" | "Desert";
export type SpicyType = "Not Spicy" | "Spicy" | "Hot";

// Translators to Hebrew for the UI
export const ComplexityHe = {
  "Beginner": "קל",
  "Normal": "רגיל",
  "Complex": "מורכב"
};

export const LabelHe = {
  "Kids Friendly": "ידידותי לילדים",
  "Healthy": "בריא",
  "Vegan": "טבעוני"
};

export const MaterialHe = {
  "Fish": "דגים",
  "Meat": "בשר",
  "Vegetables": "ירקות",
  "Dairy": "חלבי"
};

export const DishHe = {
  "Stew": "תבשיל",
  "Soup": "מרק",
  "Baked": "אפוי",
  "Desert": "קינוח"
};

export const SpicyHe = {
  "Not Spicy": "לא חריף",
  "Spicy": "פיקנטי",
  "Hot": "חריף"
};

export interface Recipe {
  id: string;
  title: string;
  image_url: string;
  instructions: { step: number; text: string }[];
  ingredients: { name: string; amount: string }[];
  complexity: ComplexityType;
  label: LabelType;
  main_material: MaterialType;
  type: DishType;
  spicy: SpicyType;
  prep_time_minutes: number;
  servings: number;
  created_at: string;
}
