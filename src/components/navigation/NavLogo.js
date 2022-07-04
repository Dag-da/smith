import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavLogo() {
  return (
    <div>
      <Link to="/">
        <Logo>
          Smith<span>.</span>CV
        </Logo>
      </Link>
    </div>
  );
}
const Logo = styled.p`
  font-weight: 900;
  color: #100f3a;
  span {
    color: #8583e1;
  }
`;
