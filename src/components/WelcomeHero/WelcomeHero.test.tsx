import React from 'react';
import { render } from '@testing-library/react';
import WelcomeHero from './WelcomeHero';

it('renders without crashing', () => {
  const { container } = render(<WelcomeHero />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<WelcomeHero className={className} />);
  expect(container.firstChild).toHaveClass(className);
});
