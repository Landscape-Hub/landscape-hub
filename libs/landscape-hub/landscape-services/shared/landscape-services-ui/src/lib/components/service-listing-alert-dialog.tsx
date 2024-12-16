import React, { ReactNode } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@landscape/shadcn';
import { Service } from '@landscape/schema';

interface AlertDialogDemoProps {
  onAction: (id: number) => void;
  service: Service;
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogTitle: string;
  dialogDesc: string;
  buttonText: string;
  children: ReactNode;
}

export function ServiceListingAlertDialog({
  onAction,
  service,
  open,
  setOpen,
  dialogTitle,
  dialogDesc,
  buttonText,
  children,
}: AlertDialogDemoProps) {
  const handleAction = () => {
    onAction(service.id);
    setOpen(false);
  };

  const handleCancel = () => {
    return null;
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {dialogTitle} {service.serviceName}?
          </AlertDialogTitle>
          <AlertDialogDescription>{dialogDesc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleAction}>
            {buttonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ServiceListingAlertDialog;
