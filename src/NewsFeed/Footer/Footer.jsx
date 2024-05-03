import React from "react";
import "./Footer.css";
import plus from "../../assets/ForNewsFeed/square-plus-solid.svg";

const Footer = () => {
  return (
    <div className="Footer bg-[#76ABAE] flex justify-center items-center h-[50px] sticky w-full bottom-0">
      <img src={plus} alt="" className="w-7 h-7" />
    </div>
  );
};

export default Footer;
