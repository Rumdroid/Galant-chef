"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import AdminProductList from '@/components/AdminProductList';
import AdminInquiryList from '@/components/AdminInquiryList';
import AdminLogin from '@/components/AdminLogin';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from '@/lib/auth';

export default function AdminPage() {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="glass-effect p-8 rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Admin Login</h1>
          <AdminLogin />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <div>
            <Link href="/">
              <Button variant="outline" className="mr-2">Back to Home</Button>
            </Link>
            <Button variant="destructive" onClick={logout}>Logout</Button>
          </div>
        </div>
        <Tabs defaultValue="products" className="glass-effect p-8 rounded-lg">
          <TabsList className="mb-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <AdminProductList />
          </TabsContent>
          <TabsContent value="inquiries">
            <AdminInquiryList />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}