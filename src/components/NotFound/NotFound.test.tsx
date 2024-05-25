import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

it('renders without crashing', () => {
  expect(() => render(<NotFound />)).not.toThrow();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<NotFound className={className} />);
  expect(container.firstChild).toHaveClass(className);
});
