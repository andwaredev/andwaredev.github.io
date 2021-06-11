import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ResumeBlock } from '../constants';
import ResumeSection, { ResumeSectionProps } from './ResumeSection';

const renderResumeSection = (
  props: Partial<ResumeSectionProps> = {},
): RenderResult => {
  const { className, heading = 'Foobar', blocks: blocksProp = [] } = props;
  return render(
    <ResumeSection
      className={className}
      heading={heading}
      blocks={blocksProp}
    />,
  );
};

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  renderResumeSection();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = renderResumeSection({ className });
  expect(container.firstChild).toHaveClass(className);
});

const blocks: ResumeBlock[] = [
  {
    heading: 'Foo',
    subHeading: 'Bar',
  },
  {
    heading: 'Fizz',
    subHeading: 'Buzz',
  },
];

it('renders block for each block item provided', () => {
  const { getByText } = renderResumeSection({ blocks });
  blocks.forEach(({ heading, subHeading }) => {
    expect(getByText(heading as string)).toBeInTheDocument();
    expect(getByText(subHeading as string)).toBeInTheDocument();
  });
});
