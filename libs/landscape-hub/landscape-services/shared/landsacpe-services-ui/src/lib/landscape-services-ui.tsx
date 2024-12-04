import {ServicesDataTable} from './components/services-data-table';
import {servicesColumns} from './components/services-columns';
import {services} from './data/services';
import { DrawerLayout } from './drawer-layout';
import ServiceForm from './pages/service-form';
import * as React from 'react';
import { Service, serviceSchema } from './data/service-schema';

import {
  Drawer
} from "@landscape/shadcn";

export function LandscapeServicesUi() {

  const [open, setOpen] = React.useState(false);
  // const [serviceId, setServiceId] = React.useState("");
  const [service, setService] = React.useState<Service>({id: "",
                                                         name: "",
                                                         description: "",
                                                         status: "",
                                                         label: "",
                                                         priority: "",
  });

  // const handleEdit = (id: string) => {
  //     setServiceId(id);
  // };

  const handleEdit = (service: Service) => {
    setService(service);
  };

  const columns = servicesColumns(handleEdit);

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen} snapPoints={[1,2,3]} fadeFromIndex={1} direction="right" shouldScaleBackground={false}>
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Services UI</h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of services!
              </p>
            </div>
          </div>
          <ServicesDataTable data={services} columns={columns} />

          <DrawerLayout service={service}>
            <ServiceForm service={service}/>
          </DrawerLayout>
        </div>
      </Drawer>
    </>
  );
}

export default LandscapeServicesUi;
