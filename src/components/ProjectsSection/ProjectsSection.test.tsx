import React from 'react';
import { render } from '@testing-library/react';
import ProjectsSection from './ProjectsSection';

it('renders without crashing', () => {
  const { container } = render(<ProjectsSection projects={[]} />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(
    <ProjectsSection className={className} projects={[]} />,
  );
  expect(container.firstChild).toHaveClass(className);
});

const projects = [
  {
    img: {
      alt: '64x64',
      src: 'http://bulma.io/images/placeholders/128x128.png',
    },
    heading: 'T-Mobile',
    subHeading: 'Magenta Cellular Company',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

describe('renders a project card for each project in projects prop', () => {
  it('renders img for each project', () => {
    const { getByRole } = render(<ProjectsSection projects={projects} />);
    const img = getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
