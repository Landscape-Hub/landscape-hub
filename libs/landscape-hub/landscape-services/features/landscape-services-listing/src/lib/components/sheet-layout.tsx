import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@landscape/shadcn';
import { ReactNode } from 'react';
import { useSheet } from '@landscape/contexts';
import './sheet-layout.css';

interface SheetLayoutProps {
  children: ReactNode;
}

export function SheetLayout({ children }: SheetLayoutProps) {
  const { isOpen, closeSheet, sheetContent, sheetTitle, sheetDescription } =
    useSheet();

  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
      <Sheet open={isOpen} onOpenChange={closeSheet}>
        <SheetContent side="right" className="w-full custom-drawer-width overflow-y-auto">
          <SheetHeader className="sticky top-0 bg-white">
            <SheetTitle>{sheetTitle || 'Service Details'}</SheetTitle>
            <SheetDescription>
              {sheetDescription || 'Add the Service content here.'}
            </SheetDescription>
          </SheetHeader>
          {sheetContent}
        </SheetContent>
      </Sheet>
    </div>
  );
}
