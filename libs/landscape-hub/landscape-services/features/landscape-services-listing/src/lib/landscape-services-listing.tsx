import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto } from '@landscape/api';
import { useServicePresenter } from '@landscape/landscape-services-presenters';
import React from 'react';
import { Drawer } from '@landscape/shadcn';
import { ServiceListingFormDrawerLayout } from './components/service-listing-form-drawer-layout';
import ServiceListingForm from './components/service-listing-form';

export function LandscapeServicesListing() {
  const {
    handleDeleteService,
    isLoading,
    services,
    handleSelectService,
    selectedService,
  } = useServicePresenter();

  const onDelete = async (service: ServiceDto) => {
    await handleDeleteService(service);
  };

  const onEdit = (service: ServiceDto) => {
    handleSelectService(service);
    console.log('listing-test- ' + selectedService?.serviceName);
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
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <ServiceListingDataTable
          columns={columnsArr}
          data={services as ServiceDto[]}
        />

        <ServiceListingFormDrawerLayout service={selectedService}>
          <ServiceListingForm service={selectedService} />
        </ServiceListingFormDrawerLayout>
      </div>
    </Drawer>
  );
}

export default LandscapeServicesListing;
