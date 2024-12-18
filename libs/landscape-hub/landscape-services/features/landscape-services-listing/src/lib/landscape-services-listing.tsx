import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto } from '@landscape/api';
import { useServicePresenter } from '@landscape/landscape-services-presenters';

export function LandscapeServicesListing() {
  const { handleDeleteService, isLoading, services } =
    useServicePresenter();

  const onDelete = async (service: ServiceDto) => {
    await handleDeleteService(service);
  };

  const columnsArr = columns(onDelete);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <ServiceListingDataTable
        columns={columnsArr}
        data={services as ServiceDto[]}
      />
    </div>
  );
}

export default LandscapeServicesListing;
