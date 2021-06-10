import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Container, Content, Heading, Hero } from 'react-bulma-components';
import styled from 'styled-components';
import { CLASS_NAME_BASE, welcomeHeroContent } from '../../constants';

const StyledContainer = styled(Container)`
  > .content > h5 {
    line-height: 1.5;
  }
`;

export interface WelcomeHeroProps {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}__welcome-hero`;
const CLASS_NAMES = {
  base: baseClassName,
  content: classNames(`${baseClassName}__content`, 'has-text-centered'),
  subtitle: classNames(`${baseClassName}__subtitle`, 'mt-3'),
};

const WelcomeHero = ({ className }: WelcomeHeroProps): JSX.Element => (
  <Hero className={classNames(CLASS_NAMES.base, className)} color="success">
    <Hero.Body>
      <StyledContainer>
        <Content className={CLASS_NAMES.content}>
          <Heading renderAs="h1">{welcomeHeroContent.heading}</Heading>
          <Heading
            className={CLASS_NAMES.subtitle}
            renderAs="p"
            size={5}
            subtitle
          >
            {welcomeHeroContent.subtitle}
          </Heading>
        </Content>
      </StyledContainer>
    </Hero.Body>
  </Hero>
);

export default WelcomeHero;
