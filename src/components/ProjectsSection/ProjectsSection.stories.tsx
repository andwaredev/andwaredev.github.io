import React from 'react';
import { Story } from '@storybook/react';
import { range } from 'lodash';
import ProjectsSection, { ProjectsSectionProps } from './ProjectsSection';

export default {
  title: 'Components/ProjectsSection',
  component: ProjectsSection,
};
const Template: Story<ProjectsSectionProps> = (props: ProjectsSectionProps) => (
  <ProjectsSection {...props} />
);

export const Default = Template.bind({});
Default.args = {
  projects: range(3).map(() => ({
    img: {
      alt: '64x64',
      src: 'http://bulma.io/images/placeholders/128x128.png',
    },
    heading: 'T-Mobile',
    subHeading: 'Magenta Cellular Company',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  })),
};
