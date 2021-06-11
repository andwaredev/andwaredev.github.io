import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Content, Heading } from 'react-bulma-components';
import { CLASS_NAME_BASE } from '../../../constants';
import {
  buildResumeBlockKey,
  ResumeSection as ResumeSectionPropsBase,
} from '../constants';
import ResumeSectionBlock from './ResumeSectionBlock/ResumeSectionBlock';

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
    {blocks.map((block) => (
      <ResumeSectionBlock
        key={buildResumeBlockKey(block)}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...block}
      />
    ))}
  </Content>
);

export default ResumeSection;
