import { ColumnDef } from "@tanstack/react-table"
import { priorities, statuses } from "../data/services-data"
import { Service } from "../data/service-schema"
import { ServicesDataTableColumnHeader } from "./services-data-table-column-header"
import { ServicesDataTableRowActions } from "./services-data-table-row-actions"
import { Checkbox } from '@landscape/shadcn';

export const servicesColumns= (
  // onEdit: (id: string) => void
  onEdit: (service: Service) => void
): ColumnDef<Service>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <ServicesDataTableColumnHeader column={column} title="Service ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <ServicesDataTableColumnHeader column={column} title="Service Name" />
    ),
    cell: ({ row }) => <div className="w-[150px]">{row.getValue("name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <ServicesDataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => <div className="w-[280px]">{row.getValue("description")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <ServicesDataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <ServicesDataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ServicesDataTableRowActions row={row} onEdit={onEdit}/>,
  },
]
