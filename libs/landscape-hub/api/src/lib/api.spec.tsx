import { render } from '@testing-library/react';

import Api from './api';

describe('Api', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Api />);
    expect(baseElement).toBeTruthy();
  });
});
