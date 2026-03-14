import { ComplexityHe, LabelHe, MaterialHe, DishHe, SpicyHe } from "@/types/recipe";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const filterCategories = [
  { id: 'labels', name: 'תוויות', options: Object.entries(LabelHe) },
  { id: 'complexity', name: 'רמת קושי', options: Object.entries(ComplexityHe) },
  { id: 'material', name: 'מרכיב עיקרי', options: Object.entries(MaterialHe) },
  { id: 'dish', name: 'סוג מנה', options: Object.entries(DishHe) },
  { id: 'spicy', name: 'פיקנטיות', options: Object.entries(SpicyHe) }
];

export function FilterBar() {
  return (
    <div className="w-full bg-background border-b sticky top-16 z-40 shadow-sm overflow-hidden">
        <ScrollArea className="w-full whitespace-nowrap p-4" dir="rtl">
          <div className="flex w-max space-x-8 space-x-reverse justify-start items-center">
            {filterCategories.map((category) => (
              <div key={category.id} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-muted-foreground">
                  {category.name}:
                </span>
                <div className="flex gap-2">
                  {category.options.map(([en, he]) => (
                    <Badge 
                      key={en} 
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors px-3 py-1 font-normal text-sm"
                    >
                      {he}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </div>
  );
}
