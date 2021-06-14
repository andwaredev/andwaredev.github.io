import React from 'react';
import classNames, { Value as ClassValue } from 'classnames';
import { Container, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import { CLASS_NAME_BASE } from '../../constants';
import { ResumeContent as ResumePropsBase, resumeContent } from './constants';
import ResumeSection from './ResumeSection/ResumeSection';

const StyledContainer = styled(Container)`
  @media screen and (max-width: 1024px) {
    padding-left: 0.75rem; /* 16px */
    padding-right: 0.75rem; /* 16px */
  }
`;

export interface ResumeProps extends Partial<ResumePropsBase> {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}-resume`;
const CLASS_NAMES = {
  base: baseClassName,
  section: `${baseClassName}__section`,
};

const Resume = (props: ResumeProps): JSX.Element => {
  const { className, heading, subHeading, sections } = {
    ...resumeContent, // default to resumeContent
    ...props,
  };
  return (
    <StyledContainer className={classNames(CLASS_NAMES.base, className)}>
      <Heading renderAs="h1">{heading}</Heading>
      {subHeading && (
        <Heading renderAs="h3" subtitle>
          {subHeading}
        </Heading>
      )}
      {sections?.map(({ heading: sectionHeading, ...resumeSectionProps }) => (
        <ResumeSection
          key={sectionHeading}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...resumeSectionProps}
          className={CLASS_NAMES.section}
          heading={sectionHeading}
        />
      ))}
    </StyledContainer>
  );
};

export default Resume;
