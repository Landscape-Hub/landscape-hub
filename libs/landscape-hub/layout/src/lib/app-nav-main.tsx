import { ChevronRight, type LucideIcon } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@landscape/shadcn';
import { NavLink } from 'react-router-dom';

/**
 * Renders the AppNavMain component which displays a navigational sidebar
 * with collapsible items and optional sub-items.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.items - An array of navigation items.
 * @param {string} props.items[].title - The title of the navigation item.
 * @param {string} props.items[].url - The URL of the navigation item.
 * @param {Object} [props.items[].icon] - The optional icon component for the navigation item.
 * @param {boolean} [props.items[].isActive] - Indicates whether the navigation item is active by default.
 * @param {Array} [props.items[].items] - An optional array of sub-items.
 * @param {string} props.items[].items[].title - The title of the sub-item.
 * @param {string} props.items[].items[].url - The URL of the sub-item.
 * @return {JSX.Element} The rendered AppNavMain component.
 */
export function AppNavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}): JSX.Element {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <NavLink
                          to={subItem.url}
                          className={({ isActive }) =>
                            isActive
                              ? 'bg-blue-500 text-white'
                              : 'text-gray-700 hover:bg-gray-200'
                          }
                        >
                          <span>{subItem.title}</span>
                        </NavLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
