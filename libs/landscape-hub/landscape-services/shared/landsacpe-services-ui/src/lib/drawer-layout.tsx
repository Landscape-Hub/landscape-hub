import * as React from "react"

// import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@landscape/shadcn"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@landscape/shadcn"
import { Input } from "@landscape/shadcn"
import { Label } from "@landscape/shadcn"
import { ReactNode } from 'react';
import { Service } from './data/service-schema';

interface DrawerLayoutProps {
  children: ReactNode;
  // serviceId: string;
  service: Service;
}

export function DrawerLayout({children, service }: DrawerLayoutProps) {

  return (

    <DrawerContent className="bg-black">
      <div className="mx-auto w-full max-w-md">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-white">Edit Service- {service.id}</DrawerTitle>
          <DrawerDescription>
            Make changes to your service here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
        </div>
    </DrawerContent>
)
}
