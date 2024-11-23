import { render } from '@testing-library/react';

import DashboardUi from './dashboard-ui';

describe('DashboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardUi />);
    expect(baseElement).toBeTruthy();
  });
});
