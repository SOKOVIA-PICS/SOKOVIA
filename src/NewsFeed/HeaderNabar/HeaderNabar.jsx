import React from "react";
import "./HeaderNabar.css";
import ig_logo from "../../assets/ForNewsFeed/ig.png";
import heart_logo from "../../assets/ForNewsFeed/heart-regular.svg";
import message_logo from "../../assets/ForNewsFeed/message-solid.svg";

const Nabar = () => {
  return (
    <div className="HeaderNabar flex justify-between h-14 items-center bg-[#222831] px-6">
      <div className="logoContainer">
        <h1 className="text-2xl">Instagram</h1>
      </div>
      <div className="right_logos flex gap-3 ">
        <img src={heart_logo} alt="" />
        <img src={message_logo} alt="" />
      </div>
    </div>
  );
};

export default Nabar;
