import React from 'react';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps): JSX.Element => (
  <div className={className}>Navbar</div>
);
export default Navbar;
