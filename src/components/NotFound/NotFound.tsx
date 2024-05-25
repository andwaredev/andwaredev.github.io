import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Link } from 'gatsby';
import { Container, Content, Heading, Hero } from 'react-bulma-components';

export interface NotFoundProps {
  className?: ClassValue;
}

const baseClassName = 'NotFound';
const CLASS_NAMES = {
  base: baseClassName,
  content: classNames(`${baseClassName}__content`),
  subtitle: classNames(`${baseClassName}__subtitle`, 'mt-3'),
  link: classNames(`${baseClassName}__link`, 'has-text-link'),
};

const NotFound = ({ className }: NotFoundProps): JSX.Element => (
  <Hero className={classNames(CLASS_NAMES.base, className)} color="success">
    <Hero.Body>
      <Container>
        <Content className={CLASS_NAMES.content}>
          <Heading renderAs="h1">Page Not Found</Heading>
          <Heading
            className={CLASS_NAMES.subtitle}
            renderAs="div"
            size={5}
            subtitle
          >
            <p>
              Hmm... looks like the page you were looking for doesn't exist.
            </p>
            <Link className={CLASS_NAMES.link} to="/">
              Go home instead
            </Link>
          </Heading>
        </Content>
      </Container>
    </Hero.Body>
  </Hero>
);

export default NotFound;
