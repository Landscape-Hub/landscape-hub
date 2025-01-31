import { render } from '@testing-library/react';

import LandscapeServicesListing from './landscape-services-listing';

describe('LandscapeServicesListing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandscapeServicesListing />);
    expect(baseElement).toBeTruthy();
  });
});
