import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ThemeSwitch from "../ThemeMode/ThemeSwitch.component";
import { links } from "../../constants";

const LeftSidebarComponent = () => {
  const { pathname } = useLocation();

  const nav = useNavigate();

  const toLogout = () => {
    nav("/login");
  };



  return (
    <nav className="leftsidebar border-r dark:border-grey/10 ">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <h1 className=" h3-semibold px-6">SOKOVIA</h1>
        </Link>

        <ul className="flex flex-col gap-2">
          {links.map(({ label, route, svg, activeSvg }) => {
            const isActive = pathname === route;

            return (
              <li key={label}>
                <NavLink key={label}
                  to={route}
                  className="flex items-center gap-3 group py-3 rounded-lg hover:bg-dark-500/5 hover:dark:bg-grey/5 px-6"
                >
                  {isActive ? activeSvg : svg}
                  <p className="tracking-wider">{label}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-6 px-6">
        <div className="">
          <ThemeSwitch />
        </div>
        <button
          className="flex gap-1 items-center group hover:text-teal"
          onClick={toLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:scale-125 duration-75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          Log out
        </button>
      </div>
    </nav>
  );
};

export default LeftSidebarComponent;
