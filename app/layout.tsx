import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import StaticBackground from '@/components/InteractiveBackground';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CartProvider } from '@/lib/cartContext';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FINELINE SAFETY SOLUTIONS',
  description: 'Your trusted partner for high-quality Personal Protective Equipment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <StaticBackground />
            <Navbar />
            {children}
            <footer className="py-4 text-center">
              <ThemeToggle />
            </footer>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}