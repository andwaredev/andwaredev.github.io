import { ComponentPropsWithoutRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable import/prefer-default-export */
export const CLASS_NAME_BASE = 'andwaredev';

// Custom interface and type defs
export type IconProp = ComponentPropsWithoutRef<typeof FontAwesomeIcon>['icon'];

type GatsbyLinkProps = ComponentPropsWithoutRef<typeof GatsbyLink>;

interface LinkDataInterface {
  href?: string;
  icon?: IconProp;
  label: string;
  to?: GatsbyLinkProps['to'];
}

type LinkHrefRequired =
  | {
      to?: undefined;
      href: string;
    }
  | {
      to: string;
      href?: undefined;
    };

interface FooterLinkInterface extends LinkDataInterface {
  icon: IconProp;
}

export type FooterLink = FooterLinkInterface &
  LinkHrefRequired & {
    align?: 'bottom';
  };

export type LinkData = LinkDataInterface & LinkHrefRequired;

export type NavbarLink = LinkData & {
  align?: 'right';
};

export interface ImgProps {
  src: string;
  alt: string;
}

// Constant data, text, content, etc
export const navbarLinks: NavbarLink[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Resume',
    to: '/resume',
  },
  {
    label: 'Contact',
    href: 'mailto:andrew@andrewware.xyz',
  },
  {
    label: 'Github',
    icon: faGithub,
    to: 'https://github.com/andwaredev',
    align: 'right',
  },
];

// TODO: use real brand asset
export const navbarBrandImg: ImgProps = {
  alt: 'Andrew Ware',
  src: 'https://bulma.io/images/bulma-logo.png',
};
