import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";

export default function Navigation() {
  return (
    <Header>
      <NavLogo />
      <NavItem />
      <div className="nav-button">
        <span>menu</span>
      </div>
    </Header>
  );
}
const Header = styled.header`
display: flex;
justify-content: space-between;
  .nav-button {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    color: #100f3a;
  }
  ul {
    display: none;
  }
`;
