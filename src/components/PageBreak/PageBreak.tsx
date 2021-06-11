import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import styled from 'styled-components';
import { Color } from 'react-bulma-components/src/components';
import { CLASS_NAME_BASE } from '../../constants';

const StyledHr = styled.hr`
  border-top: dotted 3px;
`;

export interface PageBreakProps {
  className?: ClassValue;
  color?: Color;
}

const baseClassName = `${CLASS_NAME_BASE}-page-break`;
const CLASS_NAMES = {
  base: classNames(baseClassName, 'has-background-white'),
};

const PageBreak = ({
  className,
  color = 'dark',
}: PageBreakProps): JSX.Element => (
  <StyledHr
    className={classNames(
      CLASS_NAMES.base,
      {
        [`has-text-${color}`]: !!color,
      },
      className,
    )}
  />
);

export default PageBreak;
