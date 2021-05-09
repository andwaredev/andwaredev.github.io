import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const { container } = render(<Navbar />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<Navbar className={className} />);
  expect(container.firstChild).toHaveClass(className);
});
