import { Table } from '@tanstack/react-table';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import {
  Button,
  DropdownMenuItem,
  DropdownMenuShortcut,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@landscape/shadcn';
import { ServiceDto } from '@landscape/api';
import { GenericAlertDialog } from '@landscape/landscape-services-ui';
import React from 'react';
import { toast } from 'sonner';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  onDeleteForAll: (service: ServiceDto) => void;
}

export function DataTablePagination<TData>({
  table,
  onDeleteForAll,
}: DataTablePaginationProps<TData>) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between px-2">
      <div>
        <GenericAlertDialog
          onAction={() => {
            try {
              table.getFilteredSelectedRowModel().rows.map((rw) => {
                const service = rw.original as ServiceDto;
                onDeleteForAll(service);
              });
              toast(`Services Deleted Successfully`, {
                position: 'top-center',
                description: (
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>The selected services have been deleted.</span>
                  </div>
                ),
                duration: 5000,
                className: 'bg-green-50 border-green-200',
              });
            } catch (error) {
              toast.error(`Failed to delete services`, {
                description: 'Error while deleting services',
                position: 'top-right',
                duration: 5000,
              });
            }
          }}
          data={null}
          open={open}
          setOpen={setOpen}
          dialogTitle={`Are you absolutely sure you want to delete the selected services`}
          dialogDesc={
            ' This action cannot be undone. This will permanently delete the\n' +
            '            services and remove them from our servers.'
          }
          buttonText={'Delete All'}
        >
          <Button
            variant="outline"
            className="h-8 w-20 p-0"
            onClick={(event) => {
              event.preventDefault();
              if (table.getFilteredSelectedRowModel().rows.length === 0) return;
              setOpen(true);
            }}
          >
            Delete All
          </Button>
        </GenericAlertDialog>
      </div>
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
