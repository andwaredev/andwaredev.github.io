import React from 'react';
import { Story } from '@storybook/react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

export default {
  title: 'Components/ProjectsSection/ProjectCard',
  component: ProjectCard,
};
const Template: Story<ProjectCardProps> = (props: ProjectCardProps) => (
  <ProjectCard {...props} />
);

export const Default = Template.bind({});
Default.args = {
  img: {
    alt: '64x64',
    src: 'http://bulma.io/images/placeholders/128x128.png',
  },
  heading: 'T-Mobile',
  subHeading: 'Magenta Cellular Company',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
