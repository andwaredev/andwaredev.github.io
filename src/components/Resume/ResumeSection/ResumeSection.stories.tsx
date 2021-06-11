import React from 'react';
import { Story } from '@storybook/react';
import ResumeSection, { ResumeSectionProps } from './ResumeSection';

export default {
  title: 'Components/Resume/ResumeSection',
  component: ResumeSection,
};

const Template: Story<ResumeSectionProps> = (props: ResumeSectionProps) => (
  <ResumeSection {...props} />
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Foobar',
  blocks: [
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
  ],
};
