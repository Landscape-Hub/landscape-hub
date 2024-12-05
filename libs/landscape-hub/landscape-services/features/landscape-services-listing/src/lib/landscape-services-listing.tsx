import { ServiceListingDataTable } from './components/service-listing-data-table';
import { columns } from './components/services-listing-columns';
import { useLandscapeService } from '@landscape/api';

export function LandscapeServicesListing() {
  const {landscapeServices} = useLandscapeService();

  return (
    <ServiceListingDataTable columns={columns} data={landscapeServices} />
  )
  // ;
}

export default LandscapeServicesListing;
