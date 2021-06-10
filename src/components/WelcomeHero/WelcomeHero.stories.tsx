import React from 'react';
import { Story } from '@storybook/react';
import WelcomeHero, { WelcomeHeroProps } from './WelcomeHero';

export default {
  title: 'Components/WelcomeHero',
  component: WelcomeHero,
};
const Template: Story<WelcomeHeroProps> = (props: WelcomeHeroProps) => (
  <WelcomeHero {...props} />
);

export const Default = Template.bind({});
Default.args = {};
