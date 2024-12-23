import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto } from '@landscape/api';
import { useServicePresenter } from '@landscape/landscape-services-presenters';
import React, { useState } from 'react';
import { Sheet, SheetTrigger } from '@landscape/shadcn';
import ServiceListingForm from './components/service-listing-form';
import { toast } from 'sonner';
import { CheckCircle2, Plus } from 'lucide-react';
import { ServiceListingFormSheetLayout } from './components/service-listing-form-sheet-layout';

export function LandscapeServicesListing() {
  const {
    handleDeleteService,
    isLoading,
    services,
    handleSelectService,
    selectedService,
  } = useServicePresenter();

  const [isEditing, setIsEditing] = useState(false);

  const onDelete = async (service: ServiceDto) => {
    try {
      await handleDeleteService(service);
      toast(`Service Deleted Successfully`, {
        position: 'top-center',
        description: (
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
            <span>
              The service with name <strong>{service.serviceName}</strong> has
              been deleted.
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
      });
    }
  };

  const onEdit = (service: ServiceDto) => {
    handleSelectService(service);
    setIsEditing(true);
  };

  const columnsArr = columns(onDelete, onEdit);

  const [openSheet, setOpenSheet] = React.useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <div>
        <SheetTrigger asChild>
          <Plus
            size={24}
            data-tip="Create New Service"
            onClick={() => {
              handleSelectService({
                  id: 0,
                  serviceName: '',
                  description: '',
                  categoryId:1,
                  categoryName:'',
                  basePrice:0,
                  costEstimate:0,
                  profitMarginTarget:0,
                  pricingModel:'Fixed',
              });
              setIsEditing(false);
            }}
          />
        </SheetTrigger>
      </div>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <ServiceListingDataTable
          columns={columnsArr}
          data={services as ServiceDto[]}
        />
        <ServiceListingFormSheetLayout
          service={selectedService}
          isEditing={isEditing}
        >
          <ServiceListingForm service={selectedService} isEditing={isEditing} />
        </ServiceListingFormSheetLayout>
      </div>
      </Sheet>
  );
}

export default LandscapeServicesListing;
