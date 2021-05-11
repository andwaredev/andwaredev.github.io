import React from 'react';
import { render } from '@testing-library/react';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { FooterLink } from '../../constants';

it('renders without crashing', () => {
  const { container } = render(<Footer />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<Footer className={className} />);
  expect(container.firstChild).toHaveClass(className);
});

describe('links', () => {
  const links: FooterLink[] = [
    {
      label: 'foo',
      to: '/foo',
      icon: faCheckSquare, // .fa-check-square
    },
    {
      label: 'bar',
      href: 'https://example.com/bar',
      icon: faCheckSquare, // .fa-check-square
    },
  ];

  const buildLinkNameMatcher = (label: string) => new RegExp(`${label}+`);

  it('renders a link in navbar for each item in links prop', () => {
    const { getByRole } = render(<Footer links={links} />);

    links.forEach(({ label, to }) => {
      expect(
        getByRole('link', {
          name: buildLinkNameMatcher(label),
        }),
      ).toHaveAttribute('href', to);
    });
  });

  it('renders icon with link label if provided', () => {
    const { getByRole } = render(<Footer links={links} />);

    links.forEach(({ label }) => {
      const link = getByRole('link', {
        name: buildLinkNameMatcher(label),
      });
      expect(
        link.querySelector('.icon > svg.fa-check-square'),
      ).toBeInTheDocument();
    });
  });

  describe('renders bottom links', () => {
    const bottomLinks: FooterLink[] = [
      {
        label: 'fizz',
        to: '/fizz',
        align: 'bottom',
        icon: faCheckSquare, // .fa-check-square
      },
      {
        label: 'buzz',
        href: 'https://example.com/buzz',
        align: 'bottom',
        icon: faCheckSquare, // .fa-check-square
      },
    ];

    describe('just bottom links', () => {
      it('does not render full icon links section if empty', () => {
        const { container } = render(<Footer links={[]} />);
        expect(container.children).toHaveLength(1);
      });

      it('renders bottom links with labels', () => {
        const { getByRole } = render(<Footer links={bottomLinks} />);

        bottomLinks.forEach(({ label, to }) => {
          expect(
            getByRole('link', {
              name: buildLinkNameMatcher(label),
            }),
          ).toHaveAttribute('href', to);
        });
      });
    });

    describe('both full icon and bottom links', () => {
      it('renders both links sections', () => {
        const { container } = render(
          <Footer links={[...links, ...bottomLinks]} />,
        );
        expect(container.firstChild?.childNodes).toHaveLength(2);
      });

      it('renders both full icon and bottom links and labels', () => {
        const { getByRole } = render(
          <Footer links={[...links, ...bottomLinks]} />,
        );

        const lastFullIconLink = getByRole('link', {
          name: new RegExp(links[links.length - 1].label),
        });

        bottomLinks.forEach(({ label, to }) => {
          const bottomLink = getByRole('link', {
            name: buildLinkNameMatcher(label),
          });
          expect(bottomLink).toHaveAttribute('href', to);
          expect(bottomLink.compareDocumentPosition(lastFullIconLink)).toEqual(
            2,
          );
        });
      });
    });
  });

  it('does not render bottom link section if no bottom links', () => {
    const { container } = render(<Footer links={links} />);
    expect(container.firstChild?.childNodes).toHaveLength(1);
  });
});
