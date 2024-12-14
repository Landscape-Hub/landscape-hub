import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { ServiceDto, useLandscapeService } from '@landscape/api';
import { Button } from '@landscape/shadcn';



export function LandscapeServicesListing() {
  const {
    serviceList: services,
    isLoading,
    error,
    refetch,
    handleDeleteService,
  } = useLandscapeService();

  const onDelete = async (id: number) => {
    await handleDeleteService(id);
    await refetch();
  };

  const columnsArr = columns(onDelete);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> Error :: </div>;
  }

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
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
