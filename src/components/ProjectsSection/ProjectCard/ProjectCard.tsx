import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Card, Content, Heading, Image, Media } from 'react-bulma-components';
import { CLASS_NAME_BASE, ImgProps } from '../../../constants';
// import { turqoise } from '../../../styles/variables.scss'; // TODO: figure out how to get this working

const turqoise = '#00d1b2';

export interface ProjectCardProps {
  className?: ClassValue;
  img?: ImgProps;
  heading: string;
  subHeading?: string;
  content: React.ReactNode;
}

const baseClassName = `${CLASS_NAME_BASE}__profile-card`;
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
  <Card
    className={classNames(CLASS_NAMES.base, className)}
    style={{
      width: 300,
      margin: 'auto',
      borderTop: `solid 4px ${turqoise}`,
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
);

export default ProjectCard;
