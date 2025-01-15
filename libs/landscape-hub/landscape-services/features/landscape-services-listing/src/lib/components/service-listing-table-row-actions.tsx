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
// import { serviceSchema } from '../data/schema';
// type Service = z.infer<typeof serviceSchema>;

import { GenericAlertDialog } from '@landscape/landscape-services-ui';
import React from 'react';
import { ServiceDto } from '@landscape/api';
// import { z } from 'zod';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onDelete: (service: ServiceDto) => void;
  onEdit: (service: ServiceDto) => void;
}

export function ServiceListingDataTableRowActions<TData>({
  row,
  onDelete,
  onEdit,
}: DataTableRowActionsProps<TData>) {
  // const service = serviceSchema.parse(row.original);
  const service = row.original as ServiceDto;

  const [open, setOpen] = React.useState(false);

  // const handleServiceAction = (service: ServiceDto) => {
  //   console.log(`action executed for service`, service);
  // };
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
        <DropdownMenuItem onSelect={() => onEdit(service)}>
          Edit
        </DropdownMenuItem>
        <GenericAlertDialog
          onAction={onDelete}
          data={service}
          open={open}
          setOpen={setOpen}
          dialogTitle={`Are you absolutely sure you want to delete Service- ${service.serviceName}`}
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
          </DropdownMenuItem>
        </GenericAlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
