import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./navbar.styled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
