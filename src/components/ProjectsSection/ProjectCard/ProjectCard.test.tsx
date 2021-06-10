import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { ImgProps } from '../../../constants';

const heading = 'some-heading';
const content = 'some-content';

it('renders without crashing', () => {
  const { container } = render(
    <ProjectCard heading={heading} content={content} />,
  );
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(
    <ProjectCard className={className} heading={heading} content={content} />,
  );
  expect(container.firstChild).toHaveClass(className);
});

describe('img', () => {
  it('does not render image if prop not provided', () => {
    const { queryByRole } = render(
      <ProjectCard heading={heading} content={content} />,
    );
    expect(queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders image if prop provided', () => {
    const img: ImgProps = {
      alt: 'img-alt',
      src: 'img-src',
    };
    const { getByRole } = render(
      <ProjectCard img={img} heading={heading} content={content} />,
    );
    const imgElement = getByRole('img');
    expect(imgElement).toHaveAttribute('alt', img.alt);
    expect(imgElement).toHaveAttribute('src', img.src);
  });
});

it('renders heading text', () => {
  const { getByText } = render(
    <ProjectCard heading={heading} content={content} />,
  );
  expect(getByText(heading)).toBeInTheDocument();
});

describe('subHeading', () => {
  it('does not render subHeading if prop not provided', () => {
    const { getAllByRole } = render(
      <ProjectCard heading={heading} content={content} />,
    );
    expect(getAllByRole('heading')).toHaveLength(1);
  });

  it('renders subHeading if prop provided', () => {
    const subHeading = 'some-sub-heading';
    const { getByText } = render(
      <ProjectCard
        heading={heading}
        subHeading={subHeading}
        content={content}
      />,
    );
    expect(getByText(subHeading)).toBeInTheDocument();
  });
});

it('renders content', () => {
  const { getByText } = render(
    <ProjectCard heading={heading} content={content} />,
  );
  expect(getByText(content)).toBeInTheDocument();
});
