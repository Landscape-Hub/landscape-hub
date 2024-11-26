import { render } from '@testing-library/react';

import LandsacpeServicesUi from './landsacpe-services-ui';

describe('LandsacpeServicesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandsacpeServicesUi />);
    expect(baseElement).toBeTruthy();
  });
});
