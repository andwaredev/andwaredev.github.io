import React from 'react';
import { Container, Content, Hero } from 'react-bulma-components';
import classNames, { Value as ClassValue } from 'classnames';
import styled from 'styled-components';
import { CLASS_NAME_BASE, profilePhotoImg } from '../../constants';

const StyledFigure = styled.figure`
  display: flex;
  margin: 0 auto;
  height: 256px;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 256px;
  height: auto;
`;

export interface ProfileImageSectionProps {
  className?: ClassValue;
}

const baseClassName = `${CLASS_NAME_BASE}__profile-image-section`;
const CLASS_NAMES = {
  base: baseClassName,
  content: classNames(`${baseClassName}__content`, 'py-4'),
  heroBody: classNames(`${baseClassName}__hero-body`, 'py-6'),
};

const ProfileImageSection = ({
  className,
}: ProfileImageSectionProps): JSX.Element => (
  <Hero className={classNames(CLASS_NAMES.base, className)}>
    <Hero.Body className={CLASS_NAMES.heroBody}>
      <Container>
        <Content className={CLASS_NAMES.content}>
          <StyledFigure className="image">
            <StyledImg
              className="is-rounded"
              alt={profilePhotoImg.alt}
              src={profilePhotoImg.src}
            />
          </StyledFigure>
        </Content>
      </Container>
    </Hero.Body>
  </Hero>
);

export default ProfileImageSection;
