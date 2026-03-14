import { Navbar } from "@/components/features/Navbar";
import { HeroSearch } from "@/components/features/HeroSearch";
import { FilterBar } from "@/components/features/FilterBar";
import { RecipeCard } from "@/components/features/RecipeCard";
import { Recipe } from "@/types/recipe";

// Temporary mock data to view the UI before Supabase hits
const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "פסטה ברוטב עגבניות ביתי",
    image_url: "",
    complexity: "Beginner",
    label: "Kids Friendly",
    main_material: "Dairy",
    spicy: "Not Spicy",
    type: "Stew",
    instructions: [],
    ingredients: [],
    prep_time_minutes: 30,
    servings: 4,
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "דג סלמון בתנור עם עשבי תיבול",
    image_url: "",
    complexity: "Normal",
    label: "Healthy",
    main_material: "Fish",
    spicy: "Spicy",
    type: "Baked",
    instructions: [],
    ingredients: [],
    prep_time_minutes: 45,
    servings: 2,
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    title: "צלי בקר ברוטב פטריות עשיר",
    image_url: "",
    complexity: "Complex",
    label: "Healthy",
    main_material: "Meat",
    spicy: "Not Spicy",
    type: "Stew",
    instructions: [],
    ingredients: [],
    prep_time_minutes: 180,
    servings: 6,
    created_at: new Date().toISOString()
  },
  {
    id: "4",
    title: "תבשיל קארי וירקות הודי",
    image_url: "",
    complexity: "Normal",
    label: "Vegan",
    main_material: "Vegetables",
    spicy: "Hot",
    type: "Stew",
    instructions: [],
    ingredients: [],
    prep_time_minutes: 40,
    servings: 4,
    created_at: new Date().toISOString()
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="w-full flex-1 pb-16">
        <HeroSearch />
        <FilterBar />
        
        <div className="container mx-auto px-4 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            מתכונים מומלצים
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
