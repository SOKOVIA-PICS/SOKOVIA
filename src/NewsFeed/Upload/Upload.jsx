import React, { useRef, useState } from "react";
import addphoto from "../../assets/ForNewsFeed/heart-solid.svg";

import "./Upload.css";
import { Link } from "react-router-dom";

const Upload = () => {
  return (
    <div className="Upload w-[35vw] px-4 mx-auto bg-[#222831] h-[100vh]">
      <div className="upload_header">
        <h1 className="text-4xl text-[#76abae] ">Create Post</h1>
      </div>
      <div className="upload_body">
        <div className="caption">
          <h2 className="sub_cap my-5">Caption</h2>
          <textarea
            className="bg-[#31363F] sub_cap mx-[12px] my-2 rounded-lg w-[31vw] h-[5rem]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="sub_cap">
          <h2 className="sub_cap my-5">Add photo</h2>
          <div className="photo_img_contaienr bg-[#31363F] mx-[12px] my-2 rounded-lg w-[31vw] h-[8rem] flex items-center justify-center">
            <img src={addphoto} alt="" className="w-[3rem]" />
          </div>
        </div>

        <div className="upload_but_container flex justify-center">
          <Link to={"/"}>
            <button className="bg-[#76ABAE] text-[#EEEEEE] w-[6rem] h-[2.5rem] rounded-[10px] my-[1rem] hover:bg-[#31363F] transition-all duration-300">
              Upload Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upload;
