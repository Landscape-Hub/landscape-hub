import { LandscapeServicesListing } from './landscape-services-listing';

export function LandscapeServicesLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <LandscapeServicesListing />
      </div>
    </div>
  );
}

export default LandscapeServicesLayout;
