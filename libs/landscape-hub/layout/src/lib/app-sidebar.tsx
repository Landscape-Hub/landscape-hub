import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@landscape/shadcn';
import { AppNavMain } from './app-nav-main';
import { AppNavUser } from './app-nav-user';
import { ComponentProps } from 'react';
import { AppTeamSwitcher } from './app-team-switcher';

import {
  Wrench,
  Users,
  Briefcase,
  BookOpen,
  Settings,
  Leaf,
  Flower,
  Layout,
  Scissors,
  Droplets,
  Star,
  Hammer,
  LeafIcon,
  Building,
  Layers,
  Clipboard,
  Package,
  Info,
  PlayCircle,
  List,
  Sliders,
  CreditCard,
  Maximize,
  Gauge,
  Activity,
  BarChart2,
  Calendar,
  CheckSquare,
  MessageCircle,
  Bell, UserCheck, UserPlus, UserX, ShieldCheck
} from 'lucide-react';
const data = {
  user: {
    name: 'Oscar',
    email: 'contact@oscarlagatta.com',
    avatar: 'shadcn.jpg',
  },
  teams: [
    {
      name: 'Landscape Hub',
      logo: Leaf, // Using 'Leaf' as the logo icon
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: Gauge, // Dashboard icon
      items: [
        {
          title: 'Overview',
          url: '#',
          icon: Activity,
        },
        {
          title: 'Analytics',
          url: '#',
          icon: BarChart2,
        },
        {
          title: 'Calendar',
          url: '#',
          icon: Calendar,
        },
        {
          title: 'Tasks',
          url: '#',
          icon: CheckSquare,
        },
        {
          title: 'Messages',
          url: '#',
          icon: MessageCircle,
        },
        {
          title: 'Notifications',
          url: '#',
          icon: Bell,
        },
      ],
    },
    {
      title: 'User Management',
      url: '#',
      icon: Users, // User Management icon
      items: [
        {
          title: 'View Users',
          url: '#',
          icon: Users,
        },
        {
          title: 'Add User',
          url: '#',
          icon: UserPlus,
        },
        {
          title: 'Edit User',
          url: '#',
          icon: UserCheck,
        },
        {
          title: 'Suspend User',
          url: '#',
          icon: UserX,
        },
        {
          title: 'Roles & Permissions',
          url: '#',
          icon: ShieldCheck,
        },
      ],
    },
    {
      title: 'Services',
      url: '#',
      icon: Wrench,
      items: [
        {
          title: 'Lawn Care',
          url: '#',
          icon: Leaf,
        },
        {
          title: 'Garden Design',
          url: '#',
          icon: Flower,
        },
        {
          title: 'Patio Installation',
          url: '#',
          icon: Layout,
        },
        {
          title: 'Tree Pruning',
          url: '#',
          icon: Scissors,
        },
        {
          title: 'Irrigation Installation',
          url: '#',
          icon: Droplets,
        },
      ],
    },
    {
      title: 'Agents',
      url: '#',
      icon: Users,
      items: [
        {
          title: 'Agent Directory',
          url: '#',
          icon: Users,
        },
        {
          title: 'Top Rated Agents',
          url: '#',
          icon: Star,
        },
      ],
    },
    {
      title: 'Projects',
      url: '#',
      icon: Briefcase,
      items: [
        {
          title: 'Small Projects',
          url: '#',
          icon: Clipboard,
        },
        {
          title: 'Medium Projects',
          url: '#',
          icon: Layers,
        },
        {
          title: 'Large Projects',
          url: '#',
          icon: Package,
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
          icon: Info,
        },
        {
          title: 'Get Started',
          url: '#',
          icon: PlayCircle,
        },
        {
          title: 'Tutorials',
          url: '#',
          icon: BookOpen,
        },
        {
          title: 'Changelog',
          url: '#',
          icon: List,
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
      items: [
        {
          title: 'General',
          url: '#',
          icon: Sliders,
        },
        {
          title: 'Team',
          url: '#',
          icon: Users,
        },
        {
          title: 'Billing',
          url: '#',
          icon: CreditCard,
        },
        {
          title: 'Limits',
          url: '#',
          icon: Maximize,
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Lawn Renovation',
      url: '#',
      icon: LeafIcon,
    },
    {
      name: 'Garden Landscaping',
      url: '#',
      icon: Flower,
    },
    {
      name: 'Patio Construction',
      url: '#',
      icon: Hammer,
    },
  ],
};


export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppTeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <AppNavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <AppNavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
