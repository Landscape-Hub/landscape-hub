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
    [onDelete, onEdit]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (!services?.length) {
    return <div>No services available.</div>;
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
            setIsEditing(false); // is invoked directly but may not reflect immediately.
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
