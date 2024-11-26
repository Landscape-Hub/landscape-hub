import {ServicesDataTable} from './components/services-data-table';
import {servicesColumns} from './components/services-columns';
import {services} from './data/services';

// Define the type for a service
type Service = {
  id: string;
  name: string;
  description: string;
  status: string;
  label: string;
  priority: string;
};

export function LandsacpeServicesUi() {
  return (
    <>
      <div className="md:hidden">
        <img
          src="tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Services UI</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of services!
            </p>
          </div>
        </div>
        <ServicesDataTable data={services} columns={servicesColumns} />
      </div>
    </>
  );
}

export default LandsacpeServicesUi;
