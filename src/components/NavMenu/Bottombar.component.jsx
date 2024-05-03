import React from "react";
import { links } from "../../constants";
import { NavLink, useLocation } from "react-router-dom";

const BottombarComponent = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar bg-white dark:bg-dark-900">
      {links.map(({ label, route, svg, activeSvg }) => {
        const isActive = pathname === route;

        return (
          <NavLink
            key={label}
            to={route}
            className="flex items-center gap-3 group py-3 rounded-lg hover:bg-dark-500/5 hover:dark:bg-grey/5 px-6"
          >
            {isActive ? activeSvg : svg}
            
          </NavLink>
        );
      })}
    </section>
  );
};

export default BottombarComponent;
