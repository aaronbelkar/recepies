import Link from 'next/link';
import { Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary font-sans">
              המתכונים של מרינה
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="מועדפים" asChild>
            <Link href="/favorites">
              <Heart className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="התחברות" asChild>
            <Link href="/login">
              <User className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
