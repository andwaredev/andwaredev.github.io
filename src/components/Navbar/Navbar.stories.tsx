import React from 'react';
import { Story } from '@storybook/react';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
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

export const Customized = Template.bind({});
Customized.args = {
  brandImg: {
    alt: 'Navbar Component Brand Image',
    src: 'https://bulma.io/images/bulma-logo.png',
  },
  links: [
    {
      label: 'foo',
      to: '/foo',
    },
    {
      label: 'bar',
      to: '/bar',
    },
    {
      label: 'fizz',
      to: '/fizz',
      icon: faCheckSquare,
      align: 'right',
    },
    {
      label: 'buzz',
      to: '/buzz',
      align: 'right',
    },
  ],
};
