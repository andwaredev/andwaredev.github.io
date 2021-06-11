import React from 'react';
import { render } from '@testing-library/react';
import PageBreak from './PageBreak';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  render(<PageBreak />);
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<PageBreak className={className} />);
  expect(container.firstChild).toHaveClass(className);
});
