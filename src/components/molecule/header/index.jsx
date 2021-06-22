import React from "react";
import Search from "../../atoms/search";
import logo from "../../../images/logo.svg";
const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <img src={logo} alt="Timescale" />
      <Search handleSearch={(e) => handleSearch(e)} />
    </div>
  );
};

export default Header;
