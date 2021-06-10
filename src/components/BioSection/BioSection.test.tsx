import React from 'react';
import { render } from '@testing-library/react';
import BioSection from './BioSection';

it('renders without crashing', () => {
  const { container } = render(<BioSection />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<BioSection className={className} />);
  expect(container.firstChild).toHaveClass(className);
});
