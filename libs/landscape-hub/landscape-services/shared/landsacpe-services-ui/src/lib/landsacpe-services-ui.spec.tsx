import { render } from '@testing-library/react';

import LandscapeServicesUi from './landscape-services-ui';

describe('LandsacpeServicesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandscapeServicesUi />);
    expect(baseElement).toBeTruthy();
  });
});
