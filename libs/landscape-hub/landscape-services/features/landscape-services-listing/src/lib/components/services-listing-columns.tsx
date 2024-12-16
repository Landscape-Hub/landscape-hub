import { ColumnDef } from '@tanstack/react-table';
import { Service } from '../data/schema';
import { DataTableColumnHeader } from './service-listing-table-column-header';
import { DataTableRowActions } from './service-listing-table-row-actions';
import { Checkbox } from '@landscape/shadcn';

export const columns = (
  onDelete: (id: number) => void
): ColumnDef<Service>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
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
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'serviceName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('serviceName')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service Description" />
    ),
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'categoryName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category Name" />
    ),
    cell: ({ row }) => <div>{row.getValue('categoryName')}</div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'basePrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Base Price" />
    ),
    cell: ({ row }) => {
      const formattedAmount = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(row.getValue('basePrice'));

      return <div>{formattedAmount}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'costEstimate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cost Estimate" />
    ),
    cell: ({ row }) => {
      const formattedAmount = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(row.getValue('costEstimate'));

      return <div>{formattedAmount}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'profitMarginTarget',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Profit Margin Target" />
    ),
    cell: ({ row }) => <div>{row.getValue('profitMarginTarget')}</div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'pricingModel',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Model" />
    ),
    cell: ({ row }) => <div>{row.getValue('pricingModel')}</div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} onDelete={onDelete} />,
  },
];
