import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Container, Content, Hero } from 'react-bulma-components';
import { bioSectionText, CLASS_NAME_BASE } from '../../constants';

export interface BioSectionProps {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}__profile-image-section`;
const CLASS_NAMES = {
  base: classNames(baseClassName, 'py-6'),
  content: classNames(`${baseClassName}__content`, 'has-text-centered'),
};

const BioSection = ({ className }: BioSectionProps): JSX.Element => (
  <Hero className={classNames(CLASS_NAMES.base, className)} color="dark">
    <Hero.Body>
      <Container>
        <Content className={CLASS_NAMES.content}>
          <p>{bioSectionText}</p>
        </Content>
      </Container>
    </Hero.Body>
  </Hero>
);

export default BioSection;
