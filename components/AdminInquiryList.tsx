"use client"

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminInquiryList() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setInquiries([
      { id: 1, name: "John Doe", email: "john@example.com", message: "Inquiry about bulk order", date: "2023-05-01" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", message: "Question about product specifications", date: "2023-05-02" },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Inquiry List</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inquiries.map((inquiry) => (
            <TableRow key={inquiry.id}>
              <TableCell>{inquiry.date}</TableCell>
              <TableCell>{inquiry.name}</TableCell>
              <TableCell>{inquiry.email}</TableCell>
              <TableCell>{inquiry.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}