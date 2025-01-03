import * as React from 'react';
import { Button } from '@landscape/shadcn';

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from '@landscape/shadcn';
import { ReactNode } from 'react';
import { Service } from '../data/schema';

interface SheetLayoutProps {
  children: ReactNode;
  service: Service | null;
  isEditing: boolean
}

interface DrawerLayoutProps {
  children: ReactNode;
}

export function ServiceListingFormSheetLayout({
                                                 children,
                                                 service,
                                                 isEditing
                                               }: SheetLayoutProps) {
  return (
    <SheetContent side="right" className="w-full custom-drawer-width overflow-y-auto">
        <SheetHeader className="sticky top-0 bg-white">
          <SheetTitle>
            {isEditing ? "Edit Service- " + service?.serviceName :  "Create New Service"}
          </SheetTitle>
          <SheetDescription >
            {isEditing && "Make changes to your service here. "}
            Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        {children}
        <SheetFooter className="pt-2">
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </SheetClose>
        </SheetFooter>
    </SheetContent>
  );
}
