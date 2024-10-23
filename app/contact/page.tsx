import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <div className="glass-effect p-8 rounded-lg">
          <p className="text-white mb-6">Have questions or need assistance? We're here to help! Fill out the form below, and we'll get back to you as soon as possible.</p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}