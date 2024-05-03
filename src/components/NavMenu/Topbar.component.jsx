import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeSwitch from "../ThemeMode/ThemeSwitch.component";

const TopbarComponent = () => {
  const nav = useNavigate();

  const toLogout = () => {
    nav("/login");
  }

  return (
    <section className="topbar border-b dark:border-grey/10">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <h1 className=" h3-semibold ">SOKOVIA</h1>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeSwitch />

          <button className="flex gap-1 items-center group hover:text-teal" onClick={toLogout}>
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
      </div>
    </section>
  );
};

export default TopbarComponent;
