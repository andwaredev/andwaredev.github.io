import React from 'react';
import { Story } from '@storybook/react';
import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template: Story<NavbarProps> = (props: NavbarProps) => (
  <Navbar {...props} />
);

export const Default = Template.bind({});
Default.args = {};
