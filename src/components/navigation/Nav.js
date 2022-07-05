import React from 'react'
// import 'flowbite';
import NavLogo from './NavLogo';
import NavItem from './NavItem';

export default function Nav() {
  return (
<nav className="bg-white container sm:px-4 py-2.5 md:mt-4 md:py-0">
  <div className="flex flex-wrap justify-between items-center mx-auto">
    <NavLogo />
    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex  p-2 ml-3 text-m font-semibold text-primary md:hidden" aria-controls="mobile-menu" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <span>Menu</span>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="flex flex-col md:flex-row md:space-x-0.5 md:mt-0 md:text-sm md:font-medium">
        <NavItem />
      </ul>
    </div>
  </div>
</nav>
);
}
