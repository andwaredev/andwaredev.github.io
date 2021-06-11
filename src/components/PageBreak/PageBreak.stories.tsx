import React from 'react';
import { Story } from '@storybook/react';
import PageBreak, { PageBreakProps } from './PageBreak';

export default {
  title: 'Components/PageBreak',
  component: PageBreak,
};

const Template: Story<PageBreakProps> = (props: PageBreakProps) => (
  <PageBreak {...props} />
);

export const Default = Template.bind({});
Default.args = {};
