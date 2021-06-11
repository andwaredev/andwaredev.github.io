import React from 'react';
import { Story } from '@storybook/react';
import { Container } from 'react-bulma-components';
import ResumeSection, { ResumeSectionProps } from './ResumeSection';

export default {
  title: 'Components/Resume/ResumeSection',
  component: ResumeSection,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container>{story()}</Container>
    ),
  ],
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
