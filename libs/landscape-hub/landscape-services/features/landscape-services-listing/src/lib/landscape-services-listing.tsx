import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto } from '@landscape/api';
import { useServicePresenter } from '@landscape/landscape-services-presenters';
import React, { useState } from 'react';
import {
  Drawer,
  DrawerTrigger,
} from '@landscape/shadcn';
import { ServiceListingFormDrawerLayout } from './components/service-listing-form-drawer-layout';
import ServiceListingForm from './components/service-listing-form';
import { toast } from 'sonner';
import { CheckCircle2, Plus } from 'lucide-react';

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

  const [openDrawer, setOpenDrawer] = React.useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Drawer
      open={openDrawer}
      onOpenChange={setOpenDrawer}
      direction="right"
      shouldScaleBackground={false}
      snapPoints={[1, 2, 3]}
      fadeFromIndex={1}
    >
      <div>
        <DrawerTrigger asChild>
          <Plus
            size={24}
            data-tip="Create New Service"
            onClick={() => setIsEditing(false)}
          />
        </DrawerTrigger>
      </div>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <ServiceListingDataTable
          columns={columnsArr}
          data={services as ServiceDto[]}
        />
        <ServiceListingFormDrawerLayout
          service={selectedService}
          isEditing={isEditing}
        >
          <ServiceListingForm service={selectedService} isEditing={isEditing} />
        </ServiceListingFormDrawerLayout>
      </div>
    </Drawer>
  );
}

export default LandscapeServicesListing;
