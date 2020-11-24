import React from "react";
import {
  CloseIcon,
  DropdownBtnLink,
  DropdownBtnWrap,
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
  DropdownWrapper,
  Icon,
} from "./dropdown.styled";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <DropdownLink to="about" onClick={toggle}>
            About
          </DropdownLink>
          <DropdownLink to="discover" onClick={toggle}>
            Discover
          </DropdownLink>
          <DropdownLink to="services" onClick={toggle}>
            Services
          </DropdownLink>
          <DropdownLink to="signup" onClick={toggle}>
            Sign Up
          </DropdownLink>
        </DropdownMenu>
        <DropdownBtnWrap>
          <DropdownBtnLink to="/signin">Sign In</DropdownBtnLink>
        </DropdownBtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
