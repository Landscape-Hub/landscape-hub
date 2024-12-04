import { RouteObject } from 'react-router-dom';
import { AppLayout } from '@landscape/layout';
import { DashboardLayout } from '@landscape/dashboard-ui';
import { FeatureOverview } from '@landscape/feature-overview';
import { UserManagementUi } from '@landscape/user-management-ui';
import { LandscapeServicesUi } from '@landscape/landscape-services-ui';
import { LandscapeServicesListing } from '@landscape/landscape-services-listing';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <FeatureOverview /> },
          { path: 'analytics', element: <div>analytics</div> },
          { path: 'calendar', element: <div>calendar</div> },
          { path: 'tasks', element: <div>tasks</div> },
          { path: 'messages', element: <div>messages</div> },
          { path: 'notifications', element: <div>notifications</div> },
        ],
      },
      {
        path: 'user-management',
        element: <UserManagementUi />
      },
      {
        path: 'services',
        element: <LandscapeServicesUi />,
        children: [
          { index: true, element: <LandscapeServicesListing /> },
        ]

      }
    ],
  },
];
