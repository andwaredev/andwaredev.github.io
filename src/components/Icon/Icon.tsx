import React, { ComponentPropsWithoutRef } from 'react';
import { Icon as BulmaIcon } from 'react-bulma-components';
import classNames, { Value as ClassValue } from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CLASS_NAME_BASE, IconProp } from '../../constants';

export interface IconProps
  extends Omit<
    ComponentPropsWithoutRef<typeof BulmaIcon>,
    'className' | 'icon'
  > {
  className?: ClassValue;
  icon: IconProp;
}

const baseClassName = `${CLASS_NAME_BASE}-icon`;

const Icon = ({
  className,
  icon,
  ...bulmaIconProps
}: IconProps): JSX.Element => (
  <BulmaIcon
    className={classNames(baseClassName, className)}
    {...bulmaIconProps} /* eslint-disable-line react/jsx-props-no-spreading */
  >
    <FontAwesomeIcon icon={icon} />
  </BulmaIcon>
);

export default Icon;
