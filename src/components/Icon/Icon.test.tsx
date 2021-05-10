import React from 'react';
import { render } from '@testing-library/react';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

it('renders without crashing', () => {
  const { container } = render(<Icon icon={faCheckSquare} />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(
    <Icon className={className} icon={faCheckSquare} />,
  );
  expect(container.firstChild).toHaveClass(className);
});

it('can set additional bulma icon props', () => {
  const title = 'some-title';
  const { container } = render(<Icon icon={faCheckSquare} title={title} />);
  expect(container.firstChild).toHaveAttribute('title', title);
});
