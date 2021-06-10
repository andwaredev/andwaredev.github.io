import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { CLASS_NAME_BASE } from '../../constants';
import ProjectCard, { ProjectCardProps } from './ProjectCard/ProjectCard';

export interface ProjectsSectionProps {
  className?: ClassValue;
  projects: ProjectCardProps[];
}

const baseClassName = `${CLASS_NAME_BASE}__profiles-section`;
const CLASS_NAMES = {
  base: baseClassName,
};

const ProjectsSection = ({
  className,
  projects,
}: ProjectsSectionProps): JSX.Element => (
  <div className={classNames(CLASS_NAMES.base, className)}>
    {projects.map(({ heading, ...projectProps }) => (
      <ProjectCard
        {...projectProps} /* eslint-disable-line react/jsx-props-no-spreading */
        key={heading}
        heading={heading}
      />
    ))}
  </div>
);

export default ProjectsSection;
