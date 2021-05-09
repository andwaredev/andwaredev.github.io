import React from 'react';
import { Icon as BulmaIcon } from 'react-bulma-components';
import classNames, { Value as ClassValue } from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CLASS_NAME_BASE, IconProp } from '../../constants';

export interface IconProps {
  className?: ClassValue;
  icon: IconProp;
}

const baseClassName = `${CLASS_NAME_BASE}-icon`;

const Icon = ({ className, icon }: IconProps): JSX.Element => (
  <BulmaIcon className={classNames(baseClassName, className)}>
    <FontAwesomeIcon icon={icon} />
  </BulmaIcon>
);

export default Icon;
