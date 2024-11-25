import { render } from '@testing-library/react';

import ClientManagementUi from './client-management-ui';

describe('ClientManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});
