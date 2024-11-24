import { RouteObject } from 'react-router-dom';
import { AppLayout } from '@landscape/layout';
import { DashboardUi } from '@landscape/dashboard-ui';
import { FeatureOverview } from '@landscape/feature-overview';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardUi />,
        children: [
          { index: true, element: <FeatureOverview /> },
          { path: 'analytics', element: <div>analytics</div> },
          { path: 'calendar', element: <div>calendar</div> },
          { path: 'tasks', element: <div>tasks</div> },
          { path: 'messages', element: <div>messages</div> },
          { path: 'notifications', element: <div>notifications</div> },
        ],
      },
    ],
  },
];
