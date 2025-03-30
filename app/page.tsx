"use client"

import React from 'react'
import { Button } from './components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,  
  TableCell,
  TableRow
} from "@/components/ui/table";

import  { useState } from "react";
import InputField from "@/components/InputExample";


import { Input } from './components/ui/input';


const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [displayValue, setDisplayValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setDisplayValue(value);
  };


  return (
    <div className="bg-primary flex h-screen flex-col items-center">
      <div className="flex justify-center space-x-10 my-10">
        <Button variant={"outline"}>Next.js</Button>
        <Input />
      </div>

      <div className="p-4">
        <InputField
          label="Enter your text"
          placeholder="Type here..."
          onInputChange={handleInputChange}
        />
        {displayValue && (
          <p className="mt-4">
            You typed: <span className="font-bold">{displayValue}</span>
          </p>
        )}
      </div>

      <div className="m-10 text-amber-200">
        <Table>
          <TableCaption>Table of Tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableCell className="font-medium"></TableCell>
              <TableCell> {displayValue} </TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium"></TableCell>
              <TableCell> {displayValue} </TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default page 