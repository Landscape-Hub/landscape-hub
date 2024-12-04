import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { labels } from "../data/services-data"
import { Service, serviceSchema } from '../data/service-schema';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DrawerTrigger
} from '@landscape/shadcn';


interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  // onEdit: (id: string) => void;
  onEdit: (service: Service) => void
}

export function ServicesDataTableRowActions<TData>({
                                             row,
                                             onEdit,
                                           }: DataTableRowActionsProps<TData>) {
  const service = serviceSchema.parse(row.original)

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
        <DropdownMenuItem onSelect={() => onEdit(service)}>Edit</DropdownMenuItem>
        </DrawerTrigger>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={service.label}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
