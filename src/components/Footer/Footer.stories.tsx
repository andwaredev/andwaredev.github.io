import React from 'react';
import { Story } from '@storybook/react';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer, { FooterProps } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template: Story<FooterProps> = (props: FooterProps) => (
  <Footer {...props} />
);

export const Default = Template.bind({});
Default.args = {};

export const Customized = Template.bind({});
Customized.args = {
  links: [
    {
      label: 'LinkedIn',
      to: '/foo',
      icon: faLinkedin,
    },
    {
      label: 'Instagram',
      to: '/bar',
      icon: faInstagram,
    },
    {
      label: 'YouTube',
      to: '/fizz',
      icon: faYoutube,
    },
    {
      label: 'GitHub',
      to: '/buzz',
      icon: faGithub,
    },
    {
      label: 'Contact Me',
      to: '#',
      icon: faEnvelope,
      align: 'bottom',
    },
  ],
};
