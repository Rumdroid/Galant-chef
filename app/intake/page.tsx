"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function IntakePage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your server
    alert('Thank you for submitting the intake form. We will get back to you soon!');
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">INTAKE FORM</h1>
        <p className="text-xl mb-8 text-white">Help us serve you better</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 glass-effect p-8 rounded-lg">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="bg-white/10 text-white"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="bg-white/10 text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label>What type of personal protective equipment are you interested in?</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {['Head protection', 'Eye and face protection', 'Respiratory protection', 'Hand protection', 'Hearing protection', 'Foot protection', 'Fall protection', 'Protective clothing'].map((item) => (
                <div className="flex items-center space-x-2" key={item}>
                  <Checkbox id={item} {...register(item)} />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="industry">Which industry do you represent?</Label>
            <Input
              id="industry"
              {...register("industry", { required: "Industry is required" })}
              className="bg-white/10 text-white"
            />
            {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>}
          </div>

          <div>
            <Label>What is your preferred method of contact?</Label>
            <RadioGroup defaultValue="email">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="contact-email" {...register("contactMethod")} />
                <Label htmlFor="contact-email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="contact-phone" {...register("contactMethod")} />
                <Label htmlFor="contact-phone">Phone</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="timeline">When do you require the PPE products?</Label>
            <Select {...register("timeline")}>
              <SelectTrigger className="bg-white/10 text-white">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediately">Immediately</SelectItem>
                <SelectItem value="within-month">Within a month</SelectItem>
                <SelectItem value="within-quarter">Within this quarter</SelectItem>
                <SelectItem value="future">Future consideration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="specificProducts">Do you have any specific brands or products in mind?</Label>
            <Input
              id="specificProducts"
              {...register("specificProducts")}
              className="bg-white/10 text-white"
            />
          </div>

          <div>
            <Label htmlFor="budget">What is your budget range for PPE products?</Label>
            <Select {...register("budget")}>
              <SelectTrigger className="bg-white/10 text-white">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                <SelectItem value="1001-5000">$1,001 - $5,000</SelectItem>
                <SelectItem value="5001-10000">$5,001 - $10,000</SelectItem>
                <SelectItem value="10001+">$10,001+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="comments">Additional questions or comments</Label>
            <Textarea
              id="comments"
              {...register("comments")}
              placeholder="Enter any additional questions or comments..."
              className="bg-white/10 text-white"
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            SUBMIT
          </Button>
        </form>
      </div>
    </main>
  );
}