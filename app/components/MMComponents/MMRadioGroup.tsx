"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelectionStore } from "@/lib/selectionStore";



export function MMRadioGroup() {
  const [position, setPosition] = React.useState("Choose Tag");

  const setSelected = useSelectionStore((state) => state.setSelected)

  const handleChange = (position: string) => {
    setPosition(position)
    setSelected(position)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Transaction Type Tag</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={handleChange} >
          <DropdownMenuRadioItem value="Spent">Spent</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Added">Added</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
