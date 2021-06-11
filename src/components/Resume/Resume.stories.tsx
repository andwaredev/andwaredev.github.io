import React from 'react';
import { Story } from '@storybook/react';
import Resume, { ResumeProps } from './Resume';
import { resumeContent } from './constants';

export default {
  title: 'Components/Resume',
  component: Resume,
};

const Template: Story<ResumeProps> = (props: ResumeProps) => (
  <Resume {...props} />
);

export const Default = Template.bind({});
Default.args = resumeContent;
