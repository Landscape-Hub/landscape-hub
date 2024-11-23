import { render } from '@testing-library/react';

import DashboardModels from './dashboard-models';

describe('DashboardModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardModels />);
    expect(baseElement).toBeTruthy();
  });
});
