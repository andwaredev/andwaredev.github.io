import React from 'react';
import {
  Columns,
  Container,
  Content,
  Footer as BulmaFooter,
} from 'react-bulma-components';
import { Link as GatsbyLink } from 'gatsby';
import classNames, { Value as ClassValue } from 'classnames';
import groupBy from 'lodash/groupBy';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { CLASS_NAME_BASE, FooterLink, footerLinks } from '../../constants';
import { createLinkKey, isLinkDataGatsbyLinkDef } from '../utils';
import Icon from '../Icon';

const InlineFlex = styled.div`
  display: inline-flex;
`;

export interface FooterProps {
  className?: ClassValue;
  links?: FooterLink[];
}

export const defaultFooterProps: FooterProps = {
  links: footerLinks,
};

const baseClassName = `${CLASS_NAME_BASE}-footer`;
const CLASS_NAMES = {
  base: classNames(baseClassName, 'pb-6'),
  container: classNames(`${baseClassName}__container`, 'is-max-desktop'),
  bottomContainerModifier: 'mt-6',
  content: classNames(`${baseClassName}__content`, 'has-text-centered'),
  columnsContainer: classNames(`${baseClassName}__columns-container`, 'is-1'),
  icon: classNames(`${baseClassName}__icon`, 'is-hidden-mobile'),
  iconRegularIconModifier: 'mr-1',
  iconFullIconModifier: 'is-size-2',
  linkLabel: `${baseClassName}__link-label`,
  linkLabelFullIconModified: 'is-hidden-tablet',
};

const isAlignBottom = ({ align }: FooterLink): boolean => align === 'bottom';

const mapLinkToFooterItem = (
  link: FooterLink,
  opts: { fullIcon?: boolean } = {},
): JSX.Element => {
  const { fullIcon = true } = opts;
  const { href, icon, label, to } = link;

  const content = (
    <InlineFlex>
      <Icon
        className={classNames(CLASS_NAMES.icon, {
          [CLASS_NAMES.iconFullIconModifier]: fullIcon,
          [CLASS_NAMES.iconRegularIconModifier]: !fullIcon,
        })}
        icon={icon}
        title={label}
      />
      <span
        className={classNames(CLASS_NAMES.linkLabel, {
          [CLASS_NAMES.linkLabelFullIconModified]: fullIcon,
        })}
      >
        {label}
      </span>
    </InlineFlex>
  );

  const isGatsbyLink = isLinkDataGatsbyLinkDef(link);

  return (
    <Columns.Column key={createLinkKey(link)}>
      {isGatsbyLink && <GatsbyLink to={to as string}>{content}</GatsbyLink>}
      {!isGatsbyLink && <a href={href}>{content}</a>}
    </Columns.Column>
  );
};

const Footer = ({
  className,
  links = defaultFooterProps.links,
}: FooterProps): JSX.Element => {
  const { false: iconLinks = [], true: bottomLinks = [] } = groupBy(
    links,
    isAlignBottom,
  );

  return (
    <BulmaFooter className={classNames(CLASS_NAMES.base, className)}>
      {!isEmpty(iconLinks) && (
        <Container className={CLASS_NAMES.container}>
          <Content className={CLASS_NAMES.content}>
            <Columns className={CLASS_NAMES.columnsContainer}>
              {iconLinks?.map((link) => mapLinkToFooterItem(link))}
            </Columns>
          </Content>
        </Container>
      )}
      {!isEmpty(bottomLinks) && (
        <Container
          className={classNames(
            CLASS_NAMES.container,
            CLASS_NAMES.bottomContainerModifier,
          )}
        >
          <Content className={CLASS_NAMES.content}>
            <Columns className={CLASS_NAMES.columnsContainer}>
              {bottomLinks?.map((link) =>
                mapLinkToFooterItem(link, {
                  fullIcon: false,
                }),
              )}
            </Columns>
          </Content>
        </Container>
      )}
    </BulmaFooter>
  );
};

export default Footer;
