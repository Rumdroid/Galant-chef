"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your server
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
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
          {...register("phone")}
          placeholder="Your Phone (optional)"
          className="bg-white/10 text-white"
        />
      </div>
      <div>
        <Textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="bg-white/10 text-white"
          rows={4}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Send Message
      </Button>
    </form>
  );
}