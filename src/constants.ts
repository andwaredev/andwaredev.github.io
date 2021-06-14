import React, { ComponentPropsWithoutRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImg from './images/andrew_small.png';

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
const mailToHref = 'mailto:andrew@andrewware.xyz';
const gitHubHref = 'https://github.com/andwaredev';
const linkedInHref = 'https://www.linkedin.com/in/andrew-ware-93340aa8/';
const npmHref = 'https://www.npmjs.com/~andrew-ware';
const gitHubRepoHref = `${gitHubHref}/andwaredev.github.io`;

export const footerLinks: FooterLink[] = [
  {
    label: 'LinkedIn',
    to: linkedInHref,
    icon: faLinkedin,
  },
  {
    label: 'GitHub',
    to: gitHubHref,
    icon: faGithub,
  },
  {
    label: 'NPM',
    to: npmHref,
    icon: faNpm,
  },
  {
    label: 'Contact Me',
    href: mailToHref,
    icon: faEnvelope,
  },
  {
    label: 'Site Source Code',
    href: gitHubRepoHref,
    icon: faCode,
    align: 'bottom',
  },
];

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
    href: mailToHref,
  },
  {
    label: 'Github',
    icon: faGithub,
    to: gitHubHref,
    align: 'right',
  },
];

// TODO: use real brand asset
export const navbarBrandImg: ImgProps = {
  alt: 'Andrew Ware',
  src: 'https://bulma.io/images/bulma-logo.png',
};

interface WelcomeHeroContent {
  heading: string;
  subtitle: string;
}

export const welcomeHeroContent: WelcomeHeroContent = {
  heading: 'Andrew Ware',
  subtitle:
    'Senior software engineer, code enthusiast, eater of food, mover, aspiring shaker.',
};

export const profilePhotoImg: ImgProps = {
  alt: 'Profile Photo',
  src: profileImg,
};

export const bioSectionText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export interface ProjectCardProps {
  img?: ImgProps;
  heading: string;
  subHeading?: string;
  content: React.ReactNode;
}

const uscisProject: ProjectCardProps = {
  img: {
    alt: '64x64',
    src: 'http://bulma.io/images/placeholders/128x128.png',
  },
  heading: 'USCIS',
  subHeading: 'MyE-Verify',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const charterProject: ProjectCardProps = {
  img: {
    alt: '64x64',
    src: 'http://bulma.io/images/placeholders/128x128.png',
  },
  heading: 'Charter',
  subHeading: 'RADR',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const tMobileProject: ProjectCardProps = {
  img: {
    alt: '64x64',
    src: 'http://bulma.io/images/placeholders/128x128.png',
  },
  heading: 'T-Mobile',
  subHeading: 'Layer3 TV',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const projects = [uscisProject, charterProject, tMobileProject];
