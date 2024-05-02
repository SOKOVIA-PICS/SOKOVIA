import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const NavComponent = ({ name, to, svg, activeSvg }) => {
  //using ref hook to check active class
  const ref = useRef(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    //check if the "active" class is present
    const checkActive = ref.current.classList.contains("active");
    setIsActive(checkActive);

    // Create a MutationObserver to observe changes to the className attribute
    const observer = new MutationObserver(() => {
      setIsActive(ref.current.classList.contains("active"));
    });
    observer.observe(ref.current, { attributes: true });

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <NavLink
      to={to}
      ref={ref}
      className=" text-teal flex items-center gap-3 group px-8 py-2 rounded-lg hover:bg-dark-500/5 hover:dark:bg-grey/5"
    >
      {isActive ? activeSvg : svg}
      <p className=" tracking-wider">{name} </p>
    </NavLink>
  );
};

export default NavComponent;
