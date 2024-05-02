import React from 'react';
import { BurgerMenu } from 'react-burger-menu';

const Menu = () => {
  return (
    <BurgerMenu>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact us</Link>
      <Link to="/pre-book">Pre-book now</Link>
    </BurgerMenu>
  );
};

export default Menu;