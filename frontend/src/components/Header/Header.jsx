import React from "react";
import "./Header.scss";
import logo from "./logo.png";

const Header = () => (
  <div className="header">
    <img src={logo} alt='logo' />
  </div>
);

export default Header;