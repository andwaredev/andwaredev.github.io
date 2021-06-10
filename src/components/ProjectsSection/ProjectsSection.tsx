import React from 'react';
import { Columns, Container, Heading } from 'react-bulma-components';
import classNames, { Value as ClassValue } from 'classnames';
import { CLASS_NAME_BASE, projects as projectsData } from '../../constants';
import ProjectCard, { ProjectCardProps } from './ProjectCard/ProjectCard';

export interface ProjectsSectionProps {
  className?: ClassValue;
  projects?: ProjectCardProps[];
}

const defaultProps: ProjectsSectionProps = {
  projects: projectsData,
};

const baseClassName = `${CLASS_NAME_BASE}__projects-section`;
const CLASS_NAMES = {
  base: classNames(
    baseClassName,
    'has-background-white',
    'mb-3',
    'pt-6',
    'pb-6',
  ),
  heading: classNames(`${baseClassName}__heading`, 'has-text-centered', 'mb-6'),
};

const ProjectsSection = ({
  className,
  projects = defaultProps.projects,
}: ProjectsSectionProps): JSX.Element => (
  <section className={classNames(CLASS_NAMES.base, className)}>
    <Container>
      <Heading className={CLASS_NAMES.heading} renderAs="h2">
        Recent Projects
      </Heading>
      <Columns>
        {projects?.map(({ heading, ...projectProps }) => (
          <ProjectCard
            {...projectProps} /* eslint-disable-line react/jsx-props-no-spreading */
            key={heading}
            heading={heading}
          />
        ))}
      </Columns>
    </Container>
  </section>
);

export default ProjectsSection;
