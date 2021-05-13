import React from 'react';
import { Hero } from 'react-bulma-components';
import { Story } from '@storybook/react';
import range from 'lodash/range';
import PageLayout, { PageLayoutProps } from './PageLayout';

export default {
  title: 'Components/PageLayout',
  component: PageLayout,
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const heroColors = [
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
  'dark',
  'text',
];

const Template: Story<PageLayoutProps> = (props: PageLayoutProps) => (
  <PageLayout {...props}>
    {range(6).map((index) => (
      <Hero
        key={index}
        color={heroColors[Math.floor(Math.random() * heroColors.length)]}
      >
        <Hero.Header>Lorem Ipsum</Hero.Header>
        <Hero.Body>{lorem}</Hero.Body>
      </Hero>
    ))}
  </PageLayout>
);

export const Default = Template.bind({});
Default.args = {};
