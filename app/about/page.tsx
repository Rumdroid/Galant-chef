import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">About SafetyFirst</h1>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <div className="glass-effect p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="text-white mb-4">
                At SafetyFirst, our mission is to provide high-quality Personal Protective Equipment (PPE) to ensure the safety and well-being of workers across all industries. We believe that every individual deserves access to reliable and effective protective gear.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Commitment</h2>
              <p className="text-white mb-4">
                We are committed to sourcing and delivering the best PPE products available in the market. Our team of experts carefully selects each item in our inventory to meet the highest safety standards and regulations.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Why Choose Us</h2>
              <ul className="list-disc list-inside text-white mb-4">
                <li>Wide range of high-quality PPE products</li>
                <li>Competitive pricing</li>
                <li>Expert advice and customer support</li>
                <li>Fast and reliable shipping</li>
                <li>Commitment to sustainability and ethical sourcing</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <Image
                src="/images/ppe-workers.jpg"
                alt="Workers wearing PPE"
                width={500}
                height={500}
                className="rounded-lg"
              />
              <p className="text-sm text-white/80 mt-2 text-center">Our products in action, protecting workers across various industries</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}