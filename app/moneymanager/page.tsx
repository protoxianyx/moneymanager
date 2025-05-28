// import Chart1 from "@/components/MMComponents/Chart1";
import MMInput from "@/components/MMComponents/MMInput";
import MMLabel from "@/components/MMComponents/MMLabel";
import {
  Table,
  TableBody,
  TableCaption,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

const MoneyManager = () => {
  return (
    <div>
      <MMInput />

      <Table>
        <TableCaption>Money Manager Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] ">Transaction Type</TableHead>
            <TableHead className="w-[300px]">Spent/Added</TableHead>
            <TableHead>Note</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <MMLabel  />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default MoneyManager;
