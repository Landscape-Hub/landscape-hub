import { render } from '@testing-library/react';

import DashboardLayout from './dashboard-layout';

describe('DashboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardLayout />);
    expect(baseElement).toBeTruthy();
  });
});
