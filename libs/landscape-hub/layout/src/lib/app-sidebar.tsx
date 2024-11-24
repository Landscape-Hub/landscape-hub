import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@landscape/shadcn';
import { AppNavMain } from './app-nav-main';
import { AppNavUser } from './app-nav-user';
import { ComponentProps } from 'react';
import { AppTeamSwitcher } from './app-team-switcher';
import { AppNavProjects } from './app-nav-projects';
import { data } from './data/data';


/**
 * AppSidebar component for rendering the application's sidebar.
 *
 * @param {ComponentProps<typeof Sidebar>} props - The properties passed to the Sidebar component.
 * @return {JSX.Element} The rendered AppSidebar component.
 */
export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppTeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <AppNavMain items={data.navMain} />
        <AppNavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <AppNavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
