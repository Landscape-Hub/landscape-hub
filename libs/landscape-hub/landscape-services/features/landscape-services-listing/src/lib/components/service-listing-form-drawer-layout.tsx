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
import { ServiceDto } from '@landscape/api';

interface DrawerLayoutProps {
  children: ReactNode;
  service: Service | null;
}

export function ServiceListingFormDrawerLayout({
  children,
  service,
}: DrawerLayoutProps) {
  return (
    <DrawerContent className="bg-gray-400 bg-opacity-70 flex items-center justify-center h-full w-full">
      <div className="mx-auto w-full max-w-md space-y-5">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-black">
            Edit Service- {service?.serviceName}
          </DrawerTitle>
          <DrawerDescription className="text-black">
            Make changes to your service here. Click save when you're done.
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
