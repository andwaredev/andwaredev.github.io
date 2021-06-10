import React from 'react';
import { Story } from '@storybook/react';
import BioSection, { BioSectionProps } from './BioSection';

export default {
  title: 'Components/BioSection',
  component: BioSection,
};
const Template: Story<BioSectionProps> = (props: BioSectionProps) => (
  <BioSection {...props} />
);

export const Default = Template.bind({});
Default.args = {};
