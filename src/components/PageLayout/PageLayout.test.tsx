import React from 'react';
import { render } from '@testing-library/react';
import PageLayout from './PageLayout';

it('renders without crashing', () => {
  const { container } = render(<PageLayout />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<PageLayout className={className} />);
  expect(container.firstChild).toHaveClass(className);
});

it('renders children', () => {
  const text = 'hello world';
  const child = <div>{text}</div>;
  const { getByRole } = render(<PageLayout>{child}</PageLayout>);
  expect(getByRole('main')).toHaveTextContent(text);
});
