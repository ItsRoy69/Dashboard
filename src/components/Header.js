import React from 'react';

import logo from '../assets/logo.svg';
import profileImg from '../assets/profile.jpg';

import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt='Cuvette Logo' />
      <div className="headerDiv">
        <img
          src={profileImg}
          alt='Siddharth Jain'
          className="profileImg"
        />
        <p>Siddharth Jain</p>
      </div>
    </header>
  );
};

export default Header;
