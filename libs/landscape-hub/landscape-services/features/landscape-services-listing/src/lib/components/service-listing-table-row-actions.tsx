import { Row } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@landscape/shadcn';
import { serviceSchema } from '../data/schema';

import ServiceListingAlertDialog from './service-listing-alert-dialog'
import React from 'react';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onDelete: (id: number) => void;
}

export function DataTableRowActions<TData>({
  row,
  onDelete,
}: DataTableRowActionsProps<TData>) {
  const service = serviceSchema.parse(row.original);

  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <ServiceListingAlertDialog onDelete={onDelete} serviceId={service.id} open={open} setOpen={setOpen} >
            <DropdownMenuItem onSelect={
              (event) => {
                event.preventDefault();
                setOpen(true)
              }
            }>
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
        </ServiceListingAlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
