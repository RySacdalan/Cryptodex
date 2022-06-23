import React from "react";
import './Header.css';

const Header = ({handleChange}) => {
  return (
    <div className="header__container">
      <h1 className="header__title">CryptoDex</h1>
      <div className="header__search">
        <input className="header__input" type="text" placeholder="Search crypto" onChange={handleChange} />
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Header;
