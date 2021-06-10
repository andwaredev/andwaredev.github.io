import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import {
  Card,
  Columns,
  Content,
  Heading,
  Image,
  Media,
} from 'react-bulma-components';
import {
  CLASS_NAME_BASE,
  ProjectCardProps as ProjectCardPropsBase,
} from '../../../constants';
// import { purple } from '../../../styles/variables.scss'; // TODO: figure out how to get this working

// const turqoise = '#00d1b2';
const purple = '#485fc7';

export interface ProjectCardProps extends ProjectCardPropsBase {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}__project-card`;
const CLASS_NAMES = {
  base: baseClassName,
};

const ProjectCard = ({
  className,
  img,
  heading,
  subHeading,
  content,
}: ProjectCardProps): JSX.Element => (
  <Columns.Column className={classNames(CLASS_NAMES.base, className)}>
    <Card
      style={{
        width: 300,
        margin: 'auto',
        borderTop: `solid 4px ${purple}`,
      }}
    >
      <Card.Content className="hax-text-centered" textAlign="center">
        {img && (
          <Media>
            <Media.Item align="center">
              <Image
                style={{ margin: 'auto' }}
                size={64}
                alt={img.alt}
                src={img.src}
              />
            </Media.Item>
          </Media>
        )}
        <Heading size={4}>{heading}</Heading>
        {subHeading && (
          <Heading subtitle size={6}>
            {subHeading}
          </Heading>
        )}
        <Content>{content}</Content>
      </Card.Content>
    </Card>
  </Columns.Column>
);

export default ProjectCard;
