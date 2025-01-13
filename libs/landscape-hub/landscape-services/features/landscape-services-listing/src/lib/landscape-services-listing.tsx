import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto } from '@landscape/api';
import { useServicePresenter } from '@landscape/landscape-services-presenters';
import React, { useEffect, useMemo, useState } from 'react';
import ServiceListingForm from './components/service-listing-form';
import { toast } from 'sonner';
import { CheckCircle2, Plus } from 'lucide-react';
import { SheetLayout } from './components/sheet-layout';
import { useSheet } from '@landscape/contexts';
import { Button } from '@landscape/shadcn';
import { GenericAlertDialog } from '@landscape/landscape-services-ui';

export function LandscapeServicesListing() {
  const {
    handleDeleteService,
    isLoading,
    services,
    handleSelectService,
    selectedService,
  } = useServicePresenter();

  const { openSheet } = useSheet();
  const [isEditing, setIsEditing] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false);

  const onDelete = async (service: ServiceDto) => {
    const serviceName = service?.serviceName ?? 'Unknown Service';

    try {
      if (!service || !service.id) {
        toast.error('Invalid service for deletion');
        return;
      }
      await handleDeleteService(service);
      toast(`Service Deleted Successfully`, {
        position: 'top-center',
        description: (
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
            <span>
              The service with name <strong>{serviceName}</strong> has been
              deleted.
            </span>
          </div>
        ),
        duration: 5000,
        className: 'bg-green-50 border-green-200',
      });
    } catch (error) {
      toast.error(`Failed to delete service`, {
        description: 'Error while delete service',
        position: 'top-right',
        duration: 5000,
      });
    }
  };

  //Function is called iteratively when deleting multiple services
  const onDeleteForMultiSelect = async (service: ServiceDto) => {
    await handleDeleteService(service);
  };

  const [arrServicesToDelete, setArrServicesToDelete] = React.useState<
    ServiceDto[]
  >([]);

  useEffect(() => {
    if (selectedService) {
      openSheet(
        <MemoizedServiceForm service={selectedService} isEditing={isEditing} />
      );
    }
  }, [selectedService, isEditing]);

  // memoize the serviceListing form component
  // makes sure that the form logic is contained; and it only updates when service or isEditing changes.
  //
  const MemoizedServiceForm = useMemo(() => {
    return function MemoizedForm({
      service,
      isEditing,
    }: {
      service: ServiceDto;
      isEditing: boolean;
    }) {
      return (
        <div className="p-2">
          <ServiceListingForm
            service={{
              ...service,
              serviceName: service?.serviceName || '',
              description: service?.description || '',
              categoryId: service?.categoryId || 0,
              costEstimate: service?.costEstimate || 0,
              profitMarginTarget: service?.profitMarginTarget || 0,
              basePrice: service?.basePrice || 0,
              categoryName: service?.categoryName || '',
              pricingModel: service?.pricingModel || '',
            }}
            isEditing={isEditing}
          />
        </div>
      );
    };
  }, []);

  const onEdit = (service: ServiceDto) => {
    handleSelectService(service);
    setIsEditing(true);
  };

  const columnsArr = useMemo(
    () => columns(onDelete, onEdit),
    [onDelete, onEdit, onDeleteForMultiSelect]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!services?.length) {
    return <div>No services available.</div>;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <div className="flex space-x-2">
          <Button
            onClick={() => {
              handleSelectService({
                id: 0,
                serviceName: '',
                description: '',
                categoryId: 1,
                categoryName: '',
                basePrice: 0,
                costEstimate: 0,
                profitMarginTarget: 0,
                pricingModel: 'Fixed',
              });
              setIsEditing(false); // is invoked directly but may not reflect immediately.
            }}
          >
            <Plus className="mr-2 h-4 w-4" /> New Service
          </Button>
          <GenericAlertDialog
            onAction={() => {
              try {
                arrServicesToDelete.forEach(async (service) => {
                  await onDeleteForMultiSelect(service);
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
            open={openAlertDialog}
            setOpen={setOpenAlertDialog}
            dialogTitle={`Are you absolutely sure you want to delete the selected services`}
            dialogDesc={
              ' This action cannot be undone. This will permanently delete the\n' +
              '            services and remove them from our servers.'
            }
            buttonText={'Delete Selected'}
          >
            <Button
              variant="destructive"
              // className="h-8 w-20 p-0"
              onClick={(event) => {
                event.preventDefault();
                // if (arrServicesToDelete.length === 0) return;
                setOpenAlertDialog(true);
              }}
            >
              Delete All
            </Button>
          </GenericAlertDialog>
        </div>
      </div>
      <div className="mt-8">
        <SheetLayout>
          <ServiceListingDataTable
            columns={columnsArr}
            data={services as ServiceDto[]}
            arrServicesToDelete={arrServicesToDelete}
            setArrServicesToDelete={setArrServicesToDelete}
          />
        </SheetLayout>
      </div>
    </>
  );
}

export default LandscapeServicesListing;
