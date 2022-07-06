import React from "react";
import { Link } from "react-router-dom";

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
    <>
      {datas.map((data) => (
        <Link to={data.slug} key={data.key} >
          <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:hover:bg-primary-light focus:text-white focus:bg-primary-light md:bg-primary md:text-white md:border-b-0">{data.item}</li>
        </Link>
        
      ))}
    </>
  );
}