import React from 'react';
import { render } from '@testing-library/react';
import MainContent from './MainContent';

it('renders without crashing', () => {
  const { container } = render(<MainContent />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<MainContent className={className} />);
  expect(container.firstChild).toHaveClass(className);
});
