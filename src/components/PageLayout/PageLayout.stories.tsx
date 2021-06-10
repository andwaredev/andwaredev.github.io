import React from 'react';
import { Story } from '@storybook/react';
import PageLayout, { PageLayoutProps } from './PageLayout';
import WelcomeHero from '../WelcomeHero/WelcomeHero';
import ProfileImageSection from '../ProfileImageSection/ProfileImageSection';
import BioSection from '../BioSection/BioSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

export default {
  title: 'Components/PageLayout',
  component: PageLayout,
};

const Template: Story<PageLayoutProps> = (props: PageLayoutProps) => (
  <PageLayout {...props}>
    <WelcomeHero />
    <ProfileImageSection />
    <BioSection />
    <ProjectsSection />
  </PageLayout>
);

export const Default = Template.bind({});
Default.args = {};
