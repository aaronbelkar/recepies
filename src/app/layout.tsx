import type { Metadata } from 'next';
import { Heebo, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Using Heebo as the primary Hebrew font per Brand Guide
const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'המתכונים של מרינה',
  description: 'מרינה פה כדי לעזור לכם למצוא את המתכון המושלם בקלות ובמהירות.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className={cn(
        "min-h-screen bg-background font-sans h-full",
        heebo.variable
      )}>
        {children}
      </body>
    </html>
  );
}
