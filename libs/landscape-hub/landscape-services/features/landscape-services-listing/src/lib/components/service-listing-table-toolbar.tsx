import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';

// import { DataTableFacetedFilter } from "./service-listing-table-faceted-filter"
import { Button, Input } from '@landscape/shadcn';
import { DataTableViewOptions } from './service-listing-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={
            (table.getColumn('serviceName')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('serviceName')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
