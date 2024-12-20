import { Row } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import {
  Button,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@landscape/shadcn';
import { serviceSchema } from '../data/schema';

import { ServiceListingAlertDialog } from '@landscape/landscape-services-ui';
import React from 'react';
import { ServiceDto } from '@landscape/api';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onDelete: (service: ServiceDto) => void;
  onEdit: (service: ServiceDto) => void;
}

export function DataTableRowActions<TData>({
  row,
  onDelete,
  onEdit,
}: DataTableRowActionsProps<TData>) {
  const service = serviceSchema.parse(row.original);

  const [open, setOpen] = React.useState(false);

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
        <DrawerTrigger asChild>
          <DropdownMenuItem onSelect={() => onEdit(service)}>
            Edit
          </DropdownMenuItem>
        </DrawerTrigger>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <ServiceListingAlertDialog
          onAction={onDelete}
          service={service}
          open={open}
          setOpen={setOpen}
          dialogTitle={'Are you absolutely sure you want to delete Service- '}
          dialogDesc={
            ' This action cannot be undone. This will permanently delete the\n' +
            '            service and remove its data from our servers.'
          }
          buttonText={'Delete'}
        >
          <DropdownMenuItem
            onSelect={(event) => {
              event.preventDefault();
              setOpen(true);
            }}
          >
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </ServiceListingAlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
