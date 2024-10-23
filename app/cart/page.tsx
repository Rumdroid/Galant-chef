"use client"

import React from 'react';
import { useCart } from '@/lib/cartContext';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInquire = () => {
    router.push('/inquiry');
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Your Cart</h1>
          <Link href="/shop">
            <Button variant="outline">Back to Shop</Button>
          </Link>
        </div>
        {cart.length === 0 ? (
          <p className="text-white text-center">Your cart is empty.</p>
        ) : (
          <div className="glass-effect p-8 rounded-lg">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 pb-4 border-b border-white/20">
                <div>
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-white/80">Ksh {item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="mx-2 text-white">{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="ml-4"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="mt-6 text-right">
              <p className="text-white text-xl font-bold">Total: Ksh {total.toFixed(2)}</p>
              <Button 
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleInquire}
              >
                Inquire Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}