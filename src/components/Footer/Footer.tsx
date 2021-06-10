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

const PageBreak = styled.hr`
  border-top: dotted 3px;
`;

const BottomLinksContainer = styled(Container)`
  @media screen and (max-width: 768px) {
    /**
     * !important required to override
     * Bulma util class ".mt-6"
     * which also uses !important
     */
    margin-top: 0.75rem !important;
  }
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
  base: classNames(baseClassName, 'has-background-white', 'pb-6'),
  container: classNames(`${baseClassName}__container`, 'is-max-desktop'),
  topContainerModifier: 'pt-6',
  bottomContainerModifier: 'mt-6',
  content: classNames(`${baseClassName}__content`, 'has-text-centered'),
  columnsContainer: classNames(`${baseClassName}__columns-container`, 'is-1'),
  icon: classNames(`${baseClassName}__icon`, 'is-hidden-mobile'),
  iconRegularIconModifier: 'mr-1',
  iconFullIconModifier: 'is-size-2',
  linkLabel: `${baseClassName}__link-label`,
  linkLabelFullIconModified: 'is-hidden-tablet',
  pageBreak: classNames(
    `${baseClassName}__page-break`,
    'mt-0',
    'mb-6',
    'has-background-white',
    'has-text-dark',
  ),
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
      <PageBreak className={CLASS_NAMES.pageBreak} />
      {!isEmpty(iconLinks) && (
        <Container
          className={classNames(
            CLASS_NAMES.container,
            CLASS_NAMES.topContainerModifier,
          )}
        >
          <Content className={CLASS_NAMES.content}>
            <Columns className={CLASS_NAMES.columnsContainer}>
              {iconLinks?.map((link) => mapLinkToFooterItem(link))}
            </Columns>
          </Content>
        </Container>
      )}
      {!isEmpty(bottomLinks) && (
        <BottomLinksContainer
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
        </BottomLinksContainer>
      )}
    </BulmaFooter>
  );
};

export default Footer;
