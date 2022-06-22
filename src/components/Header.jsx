import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="header__container">
      <h1 className="header__title">CryptoDex</h1>
      <div className="header__search">
        <input type="text" placeholder="Search crypto" />
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Header;
