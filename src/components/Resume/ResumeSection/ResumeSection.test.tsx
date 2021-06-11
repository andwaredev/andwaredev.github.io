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
    /* eslint-disable react/jsx-key */
    listItems: [<span>fizz</span>, <span>buzz</span>],
  },
  {
    heading: 'Fizz',
    subHeading: 'Buzz',
    listItems: [<span>foo</span>, <span>bar</span>],
  },
];

it('renders block heading and subHeading for each block item provided', () => {
  const { getByText } = renderResumeSection({ blocks });
  blocks.forEach(({ heading, subHeading }) => {
    expect(getByText(heading)).toBeInTheDocument();
    expect(getByText(subHeading)).toBeInTheDocument();
  });
});

it('renders block list items for each block item provided', () => {
  const { getAllByRole } = renderResumeSection({ blocks });
  const lis = getAllByRole('listitem');
  const providedListItems = blocks.reduce(
    (acc, { listItems }) => acc.concat(listItems),
    [] as React.ReactNode[],
  );
  expect(lis).toHaveLength(providedListItems.length);
  lis.forEach((li, i) => {
    const ListItemComponent = () => <li>{providedListItems[i]}</li>;
    const { container: listItemRenderContainer } = render(
      <ListItemComponent />,
    );
    expect(li).toEqual(listItemRenderContainer.firstChild);
  });
});
