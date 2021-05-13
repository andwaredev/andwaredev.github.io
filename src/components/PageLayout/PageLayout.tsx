import React from 'react';
import { Container } from 'react-bulma-components';
import classNames, { Value as ClassValue } from 'classnames';
import { CLASS_NAME_BASE } from '../../constants';
import Navbar from '../Navbar';
import Footer from '../Footer';

export interface PageLayoutProps {
  children?: React.ReactNode;
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}__page-layout`;
const CLASS_NAMES = {
  base: baseClassName,
  content: `${baseClassName}__content`,
  footer: `${baseClassName}__footer`,
  navbar: `${baseClassName}__navbar`,
};

const PageLayout = ({ className, children }: PageLayoutProps): JSX.Element => (
  <div className={classNames(CLASS_NAMES.base, className)}>
    <Navbar className={CLASS_NAMES.navbar} fixed="top" />
    <Container className={CLASS_NAMES.content} renderAs="main">
      {children}
    </Container>
    <Footer className={CLASS_NAMES.footer} />
  </div>
);

export default PageLayout;
