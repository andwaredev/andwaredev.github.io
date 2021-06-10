import React from 'react';
import { render } from '@testing-library/react';
import ProfileImageSection from './ProfileImageSection';

it('renders without crashing', () => {
  const { container } = render(<ProfileImageSection />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<ProfileImageSection className={className} />);
  expect(container.firstChild).toHaveClass(className);
});
