"use client"

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from '@/lib/cartContext';

const products = [
  { id: 1, name: "N95 Respirator Mask", price: 299, amount: 20, image: "/images/product1.jpg" },
  { id: 2, name: "Disposable Gloves (100 pack)", price: 1499, amount: 50, image: "/images/product2.jpg" },
  { id: 3, name: "Face Shield", price: 999, amount: 30, image: "/images/product3.jpg" },
  { id: 4, name: "Protective Goggles", price: 1299, amount: 25, image: "/images/product4.jpg" },
  { id: 5, name: "Disposable Gown", price: 799, amount: 40, image: "/images/product5.jpg" },
  { id: 6, name: "Hand Sanitizer (500ml)", price: 599, amount: 100, image: "/images/product6.jpg" },
];

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden bg-black/50 backdrop-blur-sm border-primary">
          <CardHeader className="p-0">
            <div className="relative w-full h-48">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-primary">{product.name}</CardTitle>
            <p className="text-lg font-semibold mt-2 text-white">Ksh {product.price.toFixed(2)}</p>
            <p className="text-sm text-white/80">In stock: {product.amount}</p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}