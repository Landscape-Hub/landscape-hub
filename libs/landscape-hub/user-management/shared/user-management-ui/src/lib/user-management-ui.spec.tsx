import { render } from '@testing-library/react';

import UserManagementUi from './user-management-ui';

describe('UserManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});
