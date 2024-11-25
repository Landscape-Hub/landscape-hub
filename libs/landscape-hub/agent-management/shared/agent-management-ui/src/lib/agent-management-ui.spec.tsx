import { render } from '@testing-library/react';

import AgentManagementUi from './agent-management-ui';

describe('AgentManagementUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AgentManagementUi />);
    expect(baseElement).toBeTruthy();
  });
});
