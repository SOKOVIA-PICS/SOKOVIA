import React, { useState } from "react";
import "./HeaderNabar.css";
import ig_logo from "../../assets/ForNewsFeed/ig.png";
import heart_logo from "../../assets/ForNewsFeed/heart-regular.svg";
import message_logo from "../../assets/ForNewsFeed/message-solid.svg";

const Nabar = ({ scroll }) => {
  const [lastScroll, setLastScroll] = useState(0);

  return (
    <div
      className={`HeaderNabar w-[35vw] fixed top-0 flex justify-between h-14 items-center bg-[#76ABAE] px-6 ${
        scroll ? "" : "scrollDown"
      }`}
    >
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
