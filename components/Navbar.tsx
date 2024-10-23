"use client"

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-black/50 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 flex justify-center items-center space-x-4">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:text-primary">Home</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost" className="text-white hover:text-primary">About</Button>
        </Link>
        <Link href="/intake">
          <Button variant="ghost" className="text-white hover:text-primary">Intake</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost" className="text-white hover:text-primary">Contact</Button>
        </Link>
        <Link href="/cart">
          <Button variant="ghost" className="text-white hover:text-primary">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Button>
        </Link>
        <Link href="/admin">
          <Button variant="ghost" className="text-white hover:text-primary">Admin</Button>
        </Link>
      </div>
    </nav>
  );
}