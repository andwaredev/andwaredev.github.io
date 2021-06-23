import React, { ComponentPropsWithoutRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import brandImg from './images/brand/brand.svg';
import profileImg from './images/andrew_small.png';
import uscisImg from './images/projects/uscis.png';
import charterImg from './images/projects/charter.png';
import tmobileImg from './images/projects/tmobile.png';

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
  alt: 'Andrew Ware Brand Icon',
  src: brandImg,
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

export const bioSectionText = `
I'm a software engineer based in Denver, Colorado. I'm a passionate learner and lover of the craft. I'm obsessed with discovering elegant solutions to new problems and absorbing knowledge from the teams I'm a part of. I want to build software that doesn't just work, but lasts, and is as fun for the next engineer to work on as it was for me to build.`;

export interface ProjectCardProps {
  img?: ImgProps;
  heading: string;
  subHeading?: string;
  content: React.ReactNode;
}

const uscisProject: ProjectCardProps = {
  img: {
    alt: 'USCIS Logo',
    src: uscisImg,
  },
  heading: 'USCIS',
  subHeading: 'MyE-Verify',
  content:
    'Redesigning the MyE-Verify website – which serves over 30 million users annually – with scalability, user friendliness, and code reusability in mind.',
};

const charterProject: ProjectCardProps = {
  img: {
    alt: 'Charter Logo',
    src: charterImg,
  },
  heading: 'Charter',
  subHeading: 'RADR',
  content:
    'Created an internal application for large data set ingestion, mapping, and processing for catered advertising with re-rendering and query performance in focus.',
};

const tMobileProject: ProjectCardProps = {
  img: {
    alt: 'T-Mobile Logo',
    src: tmobileImg,
  },
  heading: 'T-Mobile',
  subHeading: 'Layer3 TV',
  content:
    'Created automated processes for subscription expiration, billing charges, and refunds consuming third-party APIs and saving over 4,000 manual hours annually.',
};

export const projects = [uscisProject, charterProject, tMobileProject];
