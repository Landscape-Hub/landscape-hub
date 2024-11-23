import { RouteObject } from 'react-router-dom';
import { Layout } from '@landscape/layout';
import { DashboardUi } from '@landscape/dashboard-ui';
import { FeatureOverview } from '@landscape/feature-overview';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'users',
        element: <DashboardUi />,
        children: [{ index: true, element: <FeatureOverview /> }],
      },
    ],
  },
];
