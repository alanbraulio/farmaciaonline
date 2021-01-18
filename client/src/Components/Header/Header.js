import React, { useContext } from 'react';
import { HeaderApp, TextHeader } from './Styles.js';
import { Link } from 'react-router-dom';
// import { UserContext } from '../UserContext';

const Header = () => {

  return (
    <HeaderApp>
      <nav className={'container'}>
          <Link to="/" aria-label="Home - Farmacia Online">
            <TextHeader>Home</TextHeader>
          </Link>
          <Link to="/login">
            <TextHeader>Login</TextHeader>
          </Link>
      </nav>
    </HeaderApp>
  );
};

export default Header;
