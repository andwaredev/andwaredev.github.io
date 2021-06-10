import React from 'react';
import BioSection from '../components/BioSection/BioSection';
import PageLayout from '../components/PageLayout/PageLayout';
import ProfileImageSection from '../components/ProfileImageSection/ProfileImageSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import WelcomeHero from '../components/WelcomeHero/WelcomeHero';

const IndexPage = (): JSX.Element => (
  <PageLayout>
    <WelcomeHero />
    <ProfileImageSection />
    <BioSection />
    <ProjectsSection />
  </PageLayout>
);

export default IndexPage;
