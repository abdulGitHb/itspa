"use client";

// import Logo from "@/components/Logo";
import menu from "@/config/menu.json";
import config from "@/config/config.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

//  child navigation link interface
export interface IChildNavigationLink {
  name: string;
  url: string;
}

// navigation link interface
export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const NavBar = () => {
  // distructuring the main menu from menu object
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  const [isNavOpen, setIsNavOpen] = useState(false);
  // get current path
  const pathname = usePathname();


  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);


  return (
    <div
      className={`header w-full h-[75px] z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
      
      <nav className="navbar h-full flex justify-between items-center bg-white px-10">
        {/* logo */}
        <div className="order-0 text-4xl text-[#C2C0A2] font-bold">
          {/* <Logo /> */}
          It<span className="text-[#616847]">SPA</span>
          {/* <Image
            priority
            src={logo}
            alt="tw Logo here"
          /> */}
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" checked={isNavOpen} 
          onChange={() => setIsNavOpen(!isNavOpen)}
        />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center lg:hidden text-dark lg:order-1"
        >
          <svg
            id="show-button"
            className={`h-6 fill-current ${isNavOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className={`h-6 fill-current ${isNavOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className={`navbar-nav order-3 ${isNavOpen ? 'block' : 'hidden'} bg-white w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8`}
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <span
                    className={`nav-link inline-flex text-[#616847] items-center ${
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block bg-white lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={child.url}
                          onClick={() => setIsNavOpen(false)}
                          className={`nav-dropdown-link text-[#616847] hover:text-black block ${
                            (pathname === `${child.url}/` ||
                              pathname === child.url) &&
                            "active"
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.url}
                    onClick={() => setIsNavOpen(false)}
                    className={`nav-link block text-[#616847] hover:text-black ${
                      (pathname === `${menu.url}/` || pathname === menu.url) &&
                      "active"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {navigation_button.enable && (
            <li className="mt-4 inline-block lg:hidden">
              <Link
                onClick={() => setIsNavOpen(false)}
                className="btn btn-outline-primary btn-sm"
                href={navigation_button.link}
              >
                {navigation_button.label}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;