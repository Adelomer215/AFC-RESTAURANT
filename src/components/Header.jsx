import React from "react";
import NavBar from "./NavBar";

const Header = ({ handleSearch }) => {
  return (
    <header>
      <NavBar handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
