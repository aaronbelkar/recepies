import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function HeroSearch() {
  return (
    <div className="w-full bg-secondary/30 py-12 md:py-20 flex flex-col items-center justify-center px-4 rounded-b-3xl mb-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
        מה בא לכם לבשל היום?
      </h1>
      <p className="text-center text-muted-foreground mb-8 max-w-md">
        חפשו מתכונים בריאים, טבעוניים או ארוחות ערב קלילות לילדים.
      </p>
      
      <div className="relative w-full max-w-2xl">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          type="search" 
          placeholder="חפשו מתכון..." 
          className="w-full h-14 pl-4 pr-12 rounded-full border-2 border-primary/20 focus-visible:border-primary text-lg shadow-sm"
        />
      </div>
    </div>
  );
}
