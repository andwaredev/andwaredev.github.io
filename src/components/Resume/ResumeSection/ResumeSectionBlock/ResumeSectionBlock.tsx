import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Heading } from 'react-bulma-components';
import styled from 'styled-components';
import {
  buildResumeBlockKey,
  ResumeBlock as ResumeSectionBlockPropsBase,
} from '../../constants';
import { CLASS_NAME_BASE } from '../../../../constants';

export interface ResumeSectionBlockProps extends ResumeSectionBlockPropsBase {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}-resume-section__block`;
const CLASS_NAMES = {
  base: baseClassName,
  heading: classNames(`${baseClassName}__heading`, 'mb-1'),
  subHeading: `${baseClassName}__sub-heading`,
  subBlock: `${baseClassName}__sub-block`,
};

const StyledResumeSectionBlockWrapper = styled.div`
  > .${CLASS_NAMES.subBlock} > .title {
    &.is-5 {
      font-size: 1rem; /* 16px */
      font-weight: bold;
    }

    &.is-6 {
      font-size: 0.875rem; /* 14px */
    }
  }
`;

const ResumeSectionBlock = ({
  className,
  heading,
  subHeading,
  listItems,
  subBlocks,
}: ResumeSectionBlockProps): JSX.Element => (
  <div className={classNames(CLASS_NAMES.base, className)}>
    {heading && (
      <Heading
        className={CLASS_NAMES.heading}
        renderAs="div"
        role="heading"
        size={5}
      >
        {heading}
      </Heading>
    )}
    {subHeading && (
      <Heading
        className={CLASS_NAMES.subHeading}
        renderAs="div"
        role="heading"
        size={6}
      >
        {subHeading}
      </Heading>
    )}
    <ul>
      {listItems?.map((node, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>{node}</li>
      ))}
    </ul>
    {subBlocks?.map((block) => (
      <StyledResumeSectionBlockWrapper key={buildResumeBlockKey(block)}>
        <ResumeSectionBlock
          className={CLASS_NAMES.subBlock}
          {...block} /* eslint-disable-line react/jsx-props-no-spreading */
        />
      </StyledResumeSectionBlockWrapper>
    ))}
  </div>
);

export default ResumeSectionBlock;
