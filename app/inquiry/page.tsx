"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '@/lib/cartContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';
import { sendInquiryEmail } from '@/lib/emailService';

export default function InquiryPage() {
  const { cart, clearCart } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const inquiryData = { ...data, cart };
    try {
      await sendInquiryEmail(inquiryData);
      alert('Thank you for your inquiry. We will get back to you soon!');
      clearCart();
    } catch (error) {
      console.error('Failed to send inquiry:', error);
      alert('There was an error sending your inquiry. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Inquiry Form</h1>
          <Link href="/cart">
            <Button variant="outline">Back to Cart</Button>
          </Link>
        </div>
        <div className="glass-effect p-8 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="bg-white/10 text-white"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Your Email"
                className="bg-white/10 text-white"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Input
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Your Phone"
                className="bg-white/10 text-white"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <Input
                {...register("company")}
                placeholder="Company/Organization (optional)"
                className="bg-white/10 text-white"
              />
            </div>
            <div>
              <Textarea
                {...register("message")}
                placeholder="Additional Message (optional)"
                className="bg-white/10 text-white"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}