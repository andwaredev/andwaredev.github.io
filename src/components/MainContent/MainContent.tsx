import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { CLASS_NAME_BASE } from '../../constants';
import WelcomeHero from '../WelcomeHero/WelcomeHero';
import ProfileImageSection from '../ProfileImageSection/ProfileImageSection';
import BioSection from '../BioSection/BioSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

export interface MainContentProps {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}__main-content`;
const CLASS_NAMES = {
  base: baseClassName,
};

const MainContent = ({ className }: MainContentProps): JSX.Element => (
  <div className={classNames(CLASS_NAMES.base, className)}>
    <WelcomeHero />
    <ProfileImageSection />
    <BioSection />
    <ProjectsSection />
  </div>
);

export default MainContent;
