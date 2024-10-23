import React from 'react';
import ProductGrid from '@/components/ProductGrid';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Shop PPE Products</h1>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <ProductGrid />
      </div>
    </main>
  );
}