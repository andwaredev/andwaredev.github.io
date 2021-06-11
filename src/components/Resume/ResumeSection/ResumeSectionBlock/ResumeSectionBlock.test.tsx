import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import ResumeSectionBlock, {
  ResumeSectionBlockProps,
} from './ResumeSectionBlock';
import { ResumeBlock } from '../../constants';

const renderResumeSectionBlock = (
  props: Partial<ResumeSectionBlockProps> = {},
): RenderResult =>
  render(
    <ResumeSectionBlock
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    />,
  );

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  renderResumeSectionBlock();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = renderResumeSectionBlock({ className });
  expect(container.firstChild).toHaveClass(className);
});

const block: ResumeBlock = {
  heading: 'Foo',
  subHeading: 'Bar',
  /* eslint-disable react/jsx-key */
  listItems: [<span>fizz</span>, <span>buzz</span>],
  subBlocks: [
    {
      heading: 'Fizz',
      subHeading: 'Buzz',
    },
  ],
};

it('renders heading', () => {
  const { getByText } = renderResumeSectionBlock(block);
  expect(getByText(block.heading as string)).toBeInTheDocument();
});

it('does not render heading if none provided', () => {
  const { getAllByRole } = renderResumeSectionBlock({
    ...block,
    heading: undefined,
    subBlocks: undefined,
  });
  expect(getAllByRole('heading')).toHaveLength(1); // sub-heading is only header
});

it('renders sub-heading', () => {
  const { getByText } = renderResumeSectionBlock(block);
  expect(getByText(block.subHeading as string)).toBeInTheDocument();
});

it('does not render sub-heading if none provided', () => {
  const { getAllByRole } = renderResumeSectionBlock({
    ...block,
    subHeading: undefined,
    subBlocks: undefined,
  });
  expect(getAllByRole('heading')).toHaveLength(1);
});

it('renders block list items for each block item provided', () => {
  const { getAllByRole } = renderResumeSectionBlock(block);
  const lis = getAllByRole('listitem');
  expect(lis).toHaveLength(block.listItems?.length || 0);
  lis.forEach((li, i) => {
    const ListItemComponent = () => <li>{block.listItems?.[i]}</li>;
    const { container: listItemRenderContainer } = render(
      <ListItemComponent />,
    );
    expect(li).toEqual(listItemRenderContainer.firstChild);
  });
});

it('renders sub-blocks if provided', () => {
  const { getByText } = renderResumeSectionBlock(block);
  block.subBlocks?.forEach((subBlock) => {
    expect(getByText(subBlock.heading as string)).toBeInTheDocument();
    expect(getByText(subBlock.subHeading as string)).toBeInTheDocument();
  });
});
