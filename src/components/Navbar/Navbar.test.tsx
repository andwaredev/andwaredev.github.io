import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const { container } = render(<Navbar />);
  expect(container).toBeTruthy();
});
