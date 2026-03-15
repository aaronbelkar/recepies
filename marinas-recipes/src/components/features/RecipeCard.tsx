"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Recipe, ComplexityHe, LabelHe, SpicyHe, MaterialHe } from "@/types/recipe";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-md border-border/50">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {/* Placeholder until Supabase images are hooked up */}
        <div className="absolute inset-0 bg-secondary flex items-center justify-center text-muted-foreground">
          [Image Placeholder]
        </div>
        <button className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          <Heart className="h-5 w-5" />
          <span className="sr-only">הוסף למועדפים</span>
        </button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2">
          {recipe.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {recipe.label && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
              {LabelHe[recipe.label]}
            </Badge>
          )}
          {recipe.complexity && (
            <Badge variant="outline" className="text-muted-foreground">
              {ComplexityHe[recipe.complexity]}
            </Badge>
          )}
          {recipe.spicy && recipe.spicy !== "Not Spicy" && (
            <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-200">
              {SpicyHe[recipe.spicy]}
            </Badge>
          )}
           {recipe.main_material && (
            <Badge variant="outline" className="text-muted-foreground">
              {MaterialHe[recipe.main_material]}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
