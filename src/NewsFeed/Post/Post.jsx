import React from "react";
import "./Post.css";

const Post = ({ userProfile, userName, url, caption }) => {
  return (
    <div className="post ">
      <div className="postHeader flex px-3 justify-start items-center gap-3 ">
        <div className="profileBox w-[30px] h-[30] rounded-[50%] border-solid border-black  ">
          <img
            src={userProfile}
            alt=""
            className="w-[35px] h-[35px] rounded-[50%] outline outline-2 outline-offset-2"
          />
        </div>

        <h2 className="text-[20px] font-bold  text-[black]">{userName}</h2>
      </div>
      <div className="imgContainer max-w-full max-h-[90%] ">
        <img src={url} className="object-contain w-full h-[70vh]" />
      </div>
      <div className="catpion">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default Post;
