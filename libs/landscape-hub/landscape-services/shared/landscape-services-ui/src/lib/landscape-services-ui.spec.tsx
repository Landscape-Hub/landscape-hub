import { render } from '@testing-library/react';

import LandscapeServicesUi from './landscape-services-ui';

describe('LandscapeServicesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandscapeServicesUi />);
    expect(baseElement).toBeTruthy();
  });
});
