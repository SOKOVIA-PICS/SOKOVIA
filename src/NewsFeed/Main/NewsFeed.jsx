import React from "react";
import "./NewsFeed.css";
import Nabar from "../HeaderNabar/HeaderNabar";
import Post from "../Post/Post";
import user from "../../assets/ForNewsFeed/user-solid.svg";
import Upload from "../Upload/Upload";
import Footer from "../Footer/Footer";

const NewsFeed = () => {
  return (
    <div className="newsfeed relative">
      <Nabar />
      <div className="postContainer">
        <Post
          userProfile={user}
          userName={"A Handsome Frontend"}
          url={user}
          caption={"Welcome to the project"}
        />
        <Post
          userProfile={user}
          userName={"A Handsome Frontend"}
          url={user}
          caption={"Welcome to the project"}
        />
      </div>
      <div className="UploadContainer"></div>
      <Footer />
    </div>
  );
};

export default NewsFeed;
