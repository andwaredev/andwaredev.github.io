import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Resume, { ResumeProps } from './Resume';
import { ResumeSection } from './constants';

const renderResume = (props: Partial<ResumeProps> = {}): RenderResult => {
  const { className, heading, subHeading, sections } = props;
  return render(
    <Resume
      className={className}
      heading={heading}
      subHeading={subHeading}
      sections={sections}
    />,
  );
};

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  renderResume();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = renderResume({ className });
  expect(container.firstChild).toHaveClass(className);
});

it('renders heading text', () => {
  const heading = 'Foo';
  const { getByText } = renderResume({ heading });
  expect(getByText(heading)).toBeInTheDocument();
});

it('renders sub-heading text', () => {
  const subHeading = 'Bar';
  const { getByText } = renderResume({ heading: 'Foo', subHeading });
  expect(getByText(subHeading)).toBeInTheDocument();
});

it('does not render sub-heading if none provided', () => {
  const { getAllByRole } = renderResume({ heading: 'Foo' });
  expect(getAllByRole('heading')).toHaveLength(1);
});

it('renders resume section for each section in provided sections', () => {
  const sections: ResumeSection[] = [
    {
      heading: 'Foo',
      blocks: [
        {
          heading: 'Bar',
          subHeading: 'Bar Sub',
          listItems: [],
        },
      ],
    },
    {
      heading: 'Fizz',
      blocks: [
        {
          heading: 'Buzz',
          subHeading: 'Buzz Sub',
          listItems: [],
        },
      ],
    },
  ];
  const { getByText } = renderResume({ sections });
  sections.forEach(({ heading }) => {
    expect(getByText(heading)).toBeInTheDocument();
  });
});
