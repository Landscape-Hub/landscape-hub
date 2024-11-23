import { render } from '@testing-library/react';

import FeatureOverview from './feature-overview';

describe('FeatureOverview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureOverview />);
    expect(baseElement).toBeTruthy();
  });
});
