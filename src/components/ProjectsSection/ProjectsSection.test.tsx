import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import ProjectsSection, { ProjectsSectionProps } from './ProjectsSection';

const renderProjectsSection = ({
  className,
  projects: projectsData = [],
}: Partial<ProjectsSectionProps> = {}): RenderResult =>
  render(<ProjectsSection className={className} projects={projectsData} />);

it('renders without crashing', () => {
  const { container } = renderProjectsSection();
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = renderProjectsSection({ className });
  expect(container.firstChild).toHaveClass(className);
});

const projects = ['foo', 'bar', 'fizz', 'buzz'].map((key) => ({
  img: {
    alt: key,
    src: `foo.bar/imgages/${key}`,
  },
  heading: `${key}__heading`,
  subHeading: `${key}__subHeading`,
  content: `${key}__content`,
}));

describe('renders a project card for each project in projects prop', () => {
  it('renders img for each project', () => {
    const { getAllByRole } = renderProjectsSection({ projects });
    const imgs = getAllByRole('img');
    imgs.forEach((img) => {
      const project = projects.find(
        ({ img: imgProps }) => imgProps.alt === img.getAttribute('alt'),
      );
      expect(img).toHaveAttribute('src', project?.img.src);
    });
  });

  it('renders heading text for each project', () => {
    const { getByText } = renderProjectsSection({ projects });
    projects.forEach(({ heading }) => {
      expect(getByText(heading)).toBeInTheDocument();
    });
  });

  it('renders subheading text for each project', () => {
    const { getByText } = renderProjectsSection({ projects });
    projects.forEach(({ subHeading }) => {
      expect(getByText(subHeading)).toBeInTheDocument();
    });
  });

  it('renders content text for each project', () => {
    const { getByText } = renderProjectsSection({ projects });
    projects.forEach(({ content }) => {
      expect(getByText(content)).toBeInTheDocument();
    });
  });
});
