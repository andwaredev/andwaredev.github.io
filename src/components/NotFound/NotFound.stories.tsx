import React from 'react';
import { Story } from '@storybook/react';
import NotFound, { NotFoundProps } from './NotFound';

export default {
  title: 'Components/NotFound',
  component: NotFound,
};

const Template: Story<NotFoundProps> = (props: NotFoundProps) => (
  <NotFound {...props} />
);

export const Default = Template.bind({});
Default.args = {};
