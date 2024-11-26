import { Table } from "@tanstack/react-table"
import { Search, X } from 'lucide-react';


import { priorities, statuses } from "../data/services-data"
import { ServicesDataTableFacetedFilter } from "./services-data-table-faceted-filter"
import { Button, Input } from '@landscape/shadcn';
import { ServicesDataTableViewOptions } from './services-data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function ServicesDataTableToolbar<TData>({
                                          table,
                                        }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">

        <div className="relative">
          <Search className="text-muted-foreground absolute left-2 top-2 h-4 w-4" />
          <Input
            placeholder="     Filter services..."
            value={table.getState().globalFilter ?? ''}
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="h-8 w-[150px] lg:w-[350px]"
          />
        </div>

        {table.getColumn('status') && (
          <ServicesDataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn('priority') && (
          <ServicesDataTableFacetedFilter
            column={table.getColumn('priority')}
            title="Priority"
            options={priorities}
          />
        )}
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
      <ServicesDataTableViewOptions table={table} />
    </div>
  );
}
