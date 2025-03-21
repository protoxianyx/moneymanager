import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

const InputTableRow = () => {
  return (
    <TableRow>
      <TableCell className="font-medium"></TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right"></TableCell>
    </TableRow>
  );
};

export default InputTableRow;
