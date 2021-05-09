import React, { useState } from 'react';
import { Navbar as BulmaNavbar } from 'react-bulma-components';
import { Link as GatsbyLink } from 'gatsby';
import classNames, { Value as ClassValue } from 'classnames';
import groupBy from 'lodash/groupBy';
import isUndefined from 'lodash/isUndefined';
import {
  CLASS_NAME_BASE,
  ImgProps,
  navbarBrandImg,
  NavbarLink,
  navbarLinks,
} from '../../constants';
import Icon from '../Icon/Icon';

const BRAND_IMG_HEIGHT = 28;
const BRAND_IMG_WIDTH = 112;

export interface NavbarProps {
  brandImg?: ImgProps;
  className?: ClassValue;
  links?: NavbarLink[];
}

export const defaultNavbarProps: NavbarProps = {
  brandImg: navbarBrandImg,
  links: navbarLinks,
};

const baseClassName = `${CLASS_NAME_BASE}-navbar`;
const CLASS_NAMES = {
  base: baseClassName,
  icon: classNames(`${baseClassName}__icon`, 'is-hidden-touch', 'mr-1'),
};

const isAlignRight = ({ align }: NavbarLink): boolean => align === 'right';

const mapLinkToBulmaNavbarItem = ({
  href,
  icon,
  label,
  to,
}: NavbarLink): JSX.Element => {
  const content = (
    <>
      {icon && <Icon className={CLASS_NAMES.icon} icon={icon} />}
      {label}
    </>
  );

  const key = `${label}:${to}`;
  if (!isUndefined(to)) {
    return (
      <BulmaNavbar.Item key={key} to={to} renderAs={GatsbyLink}>
        {content}
      </BulmaNavbar.Item>
    );
  }

  return (
    <BulmaNavbar.Item key={key} href={href} renderAs="a">
      {content}
    </BulmaNavbar.Item>
  );
};

const Navbar = ({
  brandImg = defaultNavbarProps.brandImg,
  className,
  links = defaultNavbarProps.links,
}: NavbarProps): JSX.Element => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false);

  const handleBurgerClick = (): void => {
    setBurgerActive(!burgerActive);
  };

  const { false: leftLinks = [], true: rightLinks = [] } = groupBy(
    links,
    isAlignRight,
  );

  /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
  const { alt: brandImgAlt, src: brandImgSrc } = brandImg!;
  const brandImgHeight = BRAND_IMG_HEIGHT;
  const brandImgWidth = BRAND_IMG_WIDTH;

  return (
    <BulmaNavbar
      className={classNames(CLASS_NAMES.base, className)}
      active={burgerActive}
    >
      <BulmaNavbar.Brand>
        <BulmaNavbar.Item renderAs={GatsbyLink} to="/">
          <img
            alt={brandImgAlt}
            src={brandImgSrc}
            height={brandImgHeight}
            width={brandImgWidth}
          />
        </BulmaNavbar.Item>
        <BulmaNavbar.Burger onClick={handleBurgerClick} />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu>
        <BulmaNavbar.Container>
          {leftLinks.map(mapLinkToBulmaNavbarItem)}
        </BulmaNavbar.Container>
        <BulmaNavbar.Container align="right">
          {rightLinks.map(mapLinkToBulmaNavbarItem)}
        </BulmaNavbar.Container>
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  );
};
export default Navbar;
