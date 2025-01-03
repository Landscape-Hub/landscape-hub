import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto } from '@landscape/api';
import { useServicePresenter } from '@landscape/landscape-services-presenters';
import React, { useCallback, useState } from 'react';
import ServiceListingForm from './components/service-listing-form';
import { toast } from 'sonner';
import { CheckCircle2, Plus } from 'lucide-react';
import { SheetLayout } from './components/sheet-layout';
import { useSheet } from '@landscape/contexts';

export function LandscapeServicesListing() {
  const logSelectedService = useCallback((service: ServiceDto | null) => {
    console.log('Immediately updated selected service', service?.serviceName);
  }, []);

  const {
    handleDeleteService,
    isLoading,
    services,
    handleSelectService,
    selectedService,
  } = useServicePresenter(logSelectedService);

  const { openSheet } = useSheet();

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


    console.log('In OnEdit', {
      currentSelectedService: selectedService,
      newService: service,
      isEditing,
    });

    console.log('Render state: ', { selectedService, isEditing});

    openSheet(
      <div className="p-2">
        {selectedService && (<ServiceListingForm service={selectedService} isEditing={isEditing} />)}
      </div>
    );
  };

  const columnsArr = columns(onDelete, onEdit);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Plus
          size={24}
          data-tip="Create New Service"
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
            setIsEditing(false);
            console.log(isEditing);
            openSheet(
              <div className="p-2">
                <ServiceListingForm
                  service={selectedService}
                  isEditing={isEditing}
                />
              </div>
            );
          }}
        />
      </div>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <SheetLayout>
          <ServiceListingDataTable
            columns={columnsArr}
            data={services as ServiceDto[]}
          />
        </SheetLayout>
      </div>
    </>
  );
}

export default LandscapeServicesListing;
