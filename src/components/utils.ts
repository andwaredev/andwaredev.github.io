import isUndefined from 'lodash/isUndefined';
import { LinkData } from '../constants';

/* eslint-disable import/prefer-default-export */
export const isLinkDataGatsbyLinkDef = ({ to }: LinkData): boolean =>
  !isUndefined(to);

export const createLinkKey = ({ label, to, href }: LinkData): string =>
  `${label}:${!isUndefined(to) ? to : href}`;
