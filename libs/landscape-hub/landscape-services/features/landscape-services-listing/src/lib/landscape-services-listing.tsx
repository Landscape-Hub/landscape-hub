import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { useLandscapeService } from '@landscape/api';

export function LandscapeServicesListing() {
  const { landscapeServices } = useLandscapeService();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <ServiceListingDataTable columns={columns} data={landscapeServices} />
    </div>
  );
  // ;
}
export default LandscapeServicesListing;
