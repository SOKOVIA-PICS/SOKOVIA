import React, { useEffect, useRef, useState } from "react";
import "./NewsFeed.css";
import Nabar from "../HeaderNabar/HeaderNabar";
import Post from "../Post/Post";
import user from "../../assets/ForNewsFeed/user-solid.svg";
import Upload from "../Upload/Upload";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);
  const newFeedRef = useRef();

  useEffect(() => {
    const newFeed = document.getElementsByClassName("newsfeed")[0];
    newFeed?.addEventListener("scroll", () => {
      setCurrentScroll(newFeedRef.current.scrollTop);

      if (currentScroll <= 0) {
        setScrollUp(true);
      } else if (currentScroll > lastScroll) {
        setScrollUp(false);
      } else if (currentScroll < lastScroll) {
        setScrollUp(true);
      }

      setLastScroll(currentScroll);
    });
  });

  return (
    <div className="newsfeed relative mx-auto" ref={newFeedRef}>
      <div className="NaberContainer w-full relative">
        <Nabar scroll={scrollUp} />
      </div>
      <div className="postContainer ">
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
      <Link to={"/upload_post"}>
        <Footer />
      </Link>
    </div>
  );
};

export default NewsFeed;
