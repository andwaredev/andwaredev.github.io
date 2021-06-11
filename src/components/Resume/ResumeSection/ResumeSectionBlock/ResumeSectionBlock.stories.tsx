import React from 'react';
import { Story } from '@storybook/react';
import { Container, Content } from 'react-bulma-components';
import ResumeSectionBlock, {
  ResumeSectionBlockProps,
} from './ResumeSectionBlock';

export default {
  title: 'Components/Resume/ResumeSection/ResumeSectionBlock',
  component: ResumeSectionBlock,
  decorators: [
    (story: () => React.ReactNode): React.ReactNode => (
      <Container>
        <Content>{story()}</Content>
      </Container>
    ),
  ],
};

const Template: Story<ResumeSectionBlockProps> = (
  props: ResumeSectionBlockProps,
) => <ResumeSectionBlock {...props} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Foo',
  subHeading: 'Bar',
  /* eslint-disable react/jsx-key */
  listItems: [<span>fizz</span>, <span>buzz</span>],
  subBlocks: [
    {
      heading: 'Fizz',
      subHeading: 'Buzz',
      listItems: [<span>foo</span>, <span>bar</span>],
    },
  ],
};
