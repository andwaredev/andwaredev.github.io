import React from 'react';
import { Story } from '@storybook/react';
import PageLayout, { PageLayoutProps } from './PageLayout';
import MainContent from '../MainContent/MainContent';

export default {
  title: 'Components/PageLayout',
  component: PageLayout,
};

const Template: Story<PageLayoutProps> = (props: PageLayoutProps) => (
  <PageLayout {...props}>
    <MainContent />
  </PageLayout>
);

export const Default = Template.bind({});
Default.args = {};
