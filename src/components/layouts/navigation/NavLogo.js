import React from "react";
import { Link } from "react-router-dom";

export default function NavLogo() {
  return (
    <Link to="/" className="flex items-center">
        <span className="self-center text-xl font-black whitespace-nowrap text-primary">Smith<span className='text-primary-light'>.</span>CV</span>
    </Link>
  );
};
