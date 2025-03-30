"use client";

import React, { useState, ChangeEvent } from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  onInputChange?: (value: string) => void;
}

export default function InputField({
  label,
  placeholder = "Type something...",
  onInputChange,
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Optional callback if parent wants to track changes
    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-sm font-medium">{label}</label>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
