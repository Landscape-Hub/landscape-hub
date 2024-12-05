import { render } from '@testing-library/react';

import LandscapeServicesLayout from './landscape-services-layout';

describe('LandscapeServicesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandscapeServicesLayout />);
    expect(baseElement).toBeTruthy();
  });
});
