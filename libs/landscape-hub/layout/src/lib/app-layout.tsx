import { Outlet } from 'react-router-dom';
import { AppSidebar } from './app-sidebar';
import { AppHeader } from './app-header';
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@landscape/shadcn';



export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Finding Landscape Services
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Fetching Data</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/*<div className="grid auto-rows-min gap-4 md:grid-cols-3">*/}
          {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
          {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
          {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
          {/*</div>*/}
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function AppLayoutV1() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}


