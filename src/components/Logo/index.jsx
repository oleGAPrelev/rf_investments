import React from 'react';
import logo from './media/logo.svg';

const Logo = () => {
  return (
    <svg width='60px' height='60px'>
      <use href={logo + '#icon-rf_logo'} />
    </svg>
  );
};

export default Logo;
