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

interface GenericAlertDialogProps<T> {
  onAction: (item: T) => void;
  data: T;
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogTitle: string;
  dialogDesc: string;
  buttonText: string;
  children: ReactNode;
  renderTitle?: (data: T) => ReactNode | string;
  renderDescription?: (data: T) => ReactNode | string;
}
export function GenericAlertDialog<T>({
  onAction,
  data,
  open,
  setOpen,
  dialogTitle,
  dialogDesc,
  buttonText,
  children,
  renderTitle,
  renderDescription,
}: GenericAlertDialogProps<T>) {
  const handleAction = () => {
    onAction(data);
    setOpen(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {renderTitle ? renderTitle(data) : dialogTitle}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {renderDescription ? renderDescription(data) : dialogDesc}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogAction>
          <AlertDialogAction onClick={handleAction}>
            {buttonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
