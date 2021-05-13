import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavbarLink } from '../../constants';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const { container } = render(<Navbar />);
  expect(container).toBeTruthy();
});

it('sets custom className if provided', () => {
  const className = 'some-custom-class';
  const { container } = render(<Navbar className={className} />);
  expect(container.firstChild).toHaveClass(className);
});

describe('links', () => {
  const links: NavbarLink[] = [
    {
      label: 'foo',
      to: '/foo',
    },
    {
      label: 'bar',
      href: 'https://example.com/bar',
    },
  ];

  it('renders a link in navbar for each item in links prop', () => {
    const { getByText } = render(<Navbar links={links} />);

    links.forEach(({ label, to }) => {
      expect(getByText(label)).toHaveAttribute('href', to);
    });
  });

  describe('renders right links', () => {
    const rightLinks: NavbarLink[] = [
      {
        label: 'fizz',
        to: '/fizz',
        align: 'right',
      },
      {
        label: 'buzz',
        href: 'https://example.com/buzz',
        align: 'right',
      },
    ];

    it('just right links', () => {
      const { getByText } = render(<Navbar links={rightLinks} />);

      rightLinks.forEach(({ label, to }) => {
        const rightLink = getByText(label);
        expect(rightLink).toHaveAttribute('href', to);
      });
    });

    it('both left and right links', () => {
      const { getByText } = render(
        <Navbar links={[...links, ...rightLinks]} />,
      );

      const lastLeftLink = getByText(links[links.length - 1].label);

      rightLinks.forEach(({ label, to }) => {
        const rightLink = getByText(label);
        expect(rightLink.compareDocumentPosition(lastLeftLink)).toEqual(2);
        expect(rightLink).toHaveAttribute('href', to);
      });
    });
  });

  it('renders icon with link label if provided', () => {
    const icon = faGithub;
    const linkWithIcon = {
      ...links[0],
      icon,
    };

    const { getByText } = render(<Navbar links={[linkWithIcon]} />);

    const link = getByText(linkWithIcon.label);
    expect(link).toHaveAttribute('href', linkWithIcon.to);
    expect(
      link.parentElement?.querySelector('.icon > svg.fa-github'),
    ).toBeInTheDocument();
  });
});

it('renders brand image', () => {
  const brandImgProps = {
    src: '/foo/bar.png',
    alt: 'foobar',
  };

  const { getByRole } = render(<Navbar brandImg={brandImgProps} />);

  const brandImg = getByRole('img');
  expect(brandImg).toHaveAttribute('alt', brandImgProps.alt);
  expect(brandImg).toHaveAttribute('src', brandImgProps.src);
});

it('clicking burger menu button changes active status of navbar', () => {
  const { container, getByRole } = render(<Navbar />);

  const navbarMenu = container.querySelector('.navbar-menu');
  expect(navbarMenu).not.toHaveClass('is-active');

  const burgerButton = getByRole('button');
  fireEvent.click(burgerButton);

  expect(navbarMenu).toHaveClass('is-active');
});

it('can set additional bulma navbar props', () => {
  const { container } = render(<Navbar transparent />);
  expect(container.firstChild).toHaveClass('is-transparent');
});

it('defaults navbar fixed to top', () => {
  const { container } = render(<Navbar />);
  expect(container.firstChild).toHaveClass('is-fixed-top');
});
