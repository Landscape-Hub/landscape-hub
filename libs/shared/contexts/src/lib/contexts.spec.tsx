import { render } from '@testing-library/react';

import Contexts from './contexts';

describe('Contexts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contexts />);
    expect(baseElement).toBeTruthy();
  });
});
