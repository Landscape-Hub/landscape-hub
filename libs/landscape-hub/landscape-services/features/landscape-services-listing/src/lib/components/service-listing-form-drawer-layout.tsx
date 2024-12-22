import * as React from 'react';
import { Button } from '@landscape/shadcn';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@landscape/shadcn';
import { ReactNode } from 'react';
import { Service } from '../data/schema';

interface DrawerLayoutProps {
  children: ReactNode;
  service: Service | null;
  isEditing: boolean
}

export function ServiceListingFormDrawerLayout({
  children,
  service,
                                                 isEditing
}: DrawerLayoutProps) {
  return (
    <DrawerContent className="bg-gray-400 bg-opacity-70 flex h-full w-full justify-items-center">
      <div className="space-y-5 w-[500px] bg-gray-200 ml-auto flex-col h-full">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-black">
            {isEditing ? "Edit Service- " + service?.serviceName :  "Create New Service"}
          </DrawerTitle>
          <DrawerDescription className="text-black">
            {isEditing && "Make changes to your service here. "}
            Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}
