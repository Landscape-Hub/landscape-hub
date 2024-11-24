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
        children: [{ index: true, element: <FeatureOverview /> }],
      },
    ],
  },
];
