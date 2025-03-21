import React from 'react'
import { Button } from './components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,  
} from "@/components/ui/table";

import InputTableRow from './components/ui/InputTableRow';
import { Input } from './components/ui/input';


const page = () => {
  return (
    <div className="bg-neutral-600 flex h-screen flex-col items-center">
      <div className='flex justify-center space-x-10 my-10'>
        <Button variant={'outline'}>Next.js</Button>
        <Input/>
      </div>
      <div className='m-10'>
        <Table>
          <TableCaption>Table of Tasks</TableCaption>
          <TableHeader>
            <InputTableRow />
          </TableHeader>
          <TableBody>
            <InputTableRow />
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default page 