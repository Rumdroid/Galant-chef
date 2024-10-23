"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminProductList() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setProducts([
      { id: 1, name: "N95 Respirator Mask", price: 299, amount: 20 },
      { id: 2, name: "Disposable Gloves (100 pack)", price: 1499, amount: 50 },
      { id: 3, name: "Face Shield", price: 999, amount: 30 },
    ]);
  }, []);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    // In a real application, you would send an API request to update the product
    setEditingId(null);
  };

  const handleChange = (id, field, value) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, [field]: value } : product
    ));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Product Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price (Ksh)</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                {editingId === product.id ? (
                  <Input 
                    value={product.name} 
                    onChange={(e) => handleChange(product.id, 'name', e.target.value)}
                  />
                ) : (
                  product.name
                )}
              </TableCell>
              <TableCell>
                {editingId === product.id ? (
                  <Input 
                    type="number" 
                    value={product.price} 
                    onChange={(e) => handleChange(product.id, 'price', parseInt(e.target.value))}
                  />
                ) : (
                  `Ksh ${product.price.toFixed(2)}`
                )}
              </TableCell>
              <TableCell>
                {editingId === product.id ? (
                  <Input 
                    type="number" 
                    value={product.amount} 
                    onChange={(e) => handleChange(product.id, 'amount', parseInt(e.target.value))}
                  />
                ) : (
                  product.amount
                )}
              </TableCell>
              <TableCell>
                {editingId === product.id ? (
                  <Button onClick={() => handleSave(product.id)}>Save</Button>
                ) : (
                  <Button onClick={() => handleEdit(product.id)}>Edit</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}