import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Container, Content, Hero } from 'react-bulma-components';
import styled from 'styled-components';
import { bioSectionText, CLASS_NAME_BASE } from '../../constants';

const StyledContent = styled(Content)`
  margin: auto;
  max-width: 56rem;
`;

const StyledParagraph = styled.p`
  line-height: 1.75;
`;

export interface BioSectionProps {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}__profile-image-section`;
const CLASS_NAMES = {
  base: classNames(baseClassName, 'py-6'),
  content: classNames(`${baseClassName}__content`, 'has-text-centered'),
  text: classNames(`${baseClassName}__text`, 'is-size-5'),
};

const BioSection = ({ className }: BioSectionProps): JSX.Element => (
  <Hero className={classNames(CLASS_NAMES.base, className)} color="dark">
    <Hero.Body>
      <Container>
        <StyledContent className={CLASS_NAMES.content}>
          <StyledParagraph className={CLASS_NAMES.text}>
            {bioSectionText}
          </StyledParagraph>
        </StyledContent>
      </Container>
    </Hero.Body>
  </Hero>
);

export default BioSection;
