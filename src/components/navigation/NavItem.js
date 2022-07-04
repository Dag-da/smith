import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavItem() {
  const datas = [
    {
      slug: "/about",
      item: "About",
      key: 1,
    },
    {
      slug: "/skills",
      item: "Skills",
      key: 2,
    },
    {
      slug: "/services",
      item: "Services",
      key: 3,
    },
    {
      slug: "/portfolio",
      item: "Portfolio",
      key: 4,
    },
    {
      slug: "/testimonials",
      item: "Testimonials",
      key: 5,
    },
    {
      slug: "/contact",
      item: "Contact",
      key: 6,
    },
  ];
  return (
    <Menu>
      {datas.map((data) => (
        <Link to={data.slug} key={data.key}>
          <li>{data.item}</li>
        </Link>
      ))}
    </Menu>
  );
}
const Menu = styled.ul`
`