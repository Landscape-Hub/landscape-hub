import { render } from '@testing-library/react';

import DashboardUtility from './dashboard-utility';

describe('DashboardUtility', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardUtility />);
    expect(baseElement).toBeTruthy();
  });
});
