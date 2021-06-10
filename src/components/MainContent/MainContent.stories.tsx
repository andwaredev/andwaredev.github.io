import React from 'react';
import { Story } from '@storybook/react';
import MainContent, { MainContentProps } from './MainContent';

export default {
  title: 'Components/MainContent',
  component: MainContent,
};

const Template: Story<MainContentProps> = (props: MainContentProps) => (
  <MainContent {...props} />
);

export const Default = Template.bind({});
Default.args = {};
