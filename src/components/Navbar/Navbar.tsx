import React from 'react';
import { Navbar as BulmaNavbar } from 'react-bulma-components';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps): JSX.Element => (
  <BulmaNavbar className={className}>
    <BulmaNavbar.Brand>
      <BulmaNavbar.Item href="#">
        <img
          alt="Bulma: a modern CSS framework based on Flexbox"
          height="28"
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
        />
      </BulmaNavbar.Item>
      <BulmaNavbar.Burger />
    </BulmaNavbar.Brand>
    <BulmaNavbar.Menu>
      <BulmaNavbar.Container>
        <BulmaNavbar.Item href="#">
          <BulmaNavbar.Link>First</BulmaNavbar.Link>
          <BulmaNavbar.Dropdown>
            <BulmaNavbar.Item href="#">Subitem 1</BulmaNavbar.Item>
            <BulmaNavbar.Item href="#">Subitem 2</BulmaNavbar.Item>
            <BulmaNavbar.Divider />
            <BulmaNavbar.Item href="#">After divider</BulmaNavbar.Item>
          </BulmaNavbar.Dropdown>
        </BulmaNavbar.Item>
        <BulmaNavbar.Item href="#">Second</BulmaNavbar.Item>
      </BulmaNavbar.Container>
      <BulmaNavbar.Container align="right">
        <BulmaNavbar.Item href="#">At the end</BulmaNavbar.Item>
      </BulmaNavbar.Container>
    </BulmaNavbar.Menu>
  </BulmaNavbar>
);
export default Navbar;