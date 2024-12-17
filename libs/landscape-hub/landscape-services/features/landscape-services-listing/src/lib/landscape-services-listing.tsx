import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto} from '@landscape/api';
import { Button } from '@landscape/shadcn';
import { Service } from '@landscape/schema';
import {
  useServicePresenter,
  useGetServices,
} from '@landscape/landscape-services-presenters';


export function LandscapeServicesListing() {

  const {
    serviceList: services,
    isLoading,
    error: errorListMsg,
    refetch,
  } = useGetServices();
  const { handleDeleteService, error, successMsg } = useServicePresenter();

  const onDelete = async (service: Service) => {
    await handleDeleteService(service);
  };

  const columnsArr = columns(onDelete);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <p>
        {errorListMsg}
        {successMsg}
        {error}
      </p>
      <ServiceListingDataTable
        columns={columnsArr}
        data={services as ServiceDto[]}
      />

      <Button onClick={() => refetch()}>Dispatch Services</Button>
    </div>
  );
  // ;
}

export default LandscapeServicesListing;
