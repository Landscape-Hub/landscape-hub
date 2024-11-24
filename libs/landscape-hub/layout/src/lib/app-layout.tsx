import { Outlet } from 'react-router-dom';
import { AppSidebar } from './app-sidebar';

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@landscape/shadcn';



/**
 * A layout component for the main application structure that includes a sidebar, header, and content section.
 * The sidebar is provided by `SidebarProvider`, and contains elements like `AppSidebar` and `SidebarTrigger`.
 * The header contains navigation elements including breadcrumbs for user guidance.
 * The main content area includes placeholders for additional content and uses an `Outlet` component for rendering nested routes.
 *
 * @return {JSX.Element} The layout structure of the application.
 */
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
          <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-300 md:min-h-min" >
            {/*bg-muted/50*/}
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



