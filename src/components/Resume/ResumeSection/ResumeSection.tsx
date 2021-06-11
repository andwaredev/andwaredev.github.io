import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Content, Heading } from 'react-bulma-components';
import { CLASS_NAME_BASE } from '../../../constants';
import { ResumeSection as ResumeSectionPropsBase } from '../constants';

export interface ResumeSectionProps extends ResumeSectionPropsBase {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}-resume__section`;
const CLASS_NAMES = {
  base: baseClassName,
};

const ResumeSection = ({
  className,
  heading,
  blocks,
}: ResumeSectionProps): JSX.Element => (
  <Content className={classNames(CLASS_NAMES.base, className)}>
    <Heading renderAs="h3">{heading}</Heading>
    {blocks.map(({ heading: blockHeading, subHeading, listItems }) => (
      <div key={`${blockHeading}__${subHeading}`}>
        <Heading renderAs="h4">{blockHeading}</Heading>
        <Heading renderAs="h6">{subHeading}</Heading>
        <ul>
          {listItems.map((node, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>{node}</li>
          ))}
        </ul>
      </div>
    ))}
  </Content>
);

export default ResumeSection;
