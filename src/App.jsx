import { useState } from "react";
import "./App.css";
import NewsFeed from "./NewsFeed/Main/NewsFeed";
import Upload from "./NewsFeed/Upload/Upload";

function App() {
  return (
    <>
      <div className="mainContainer flex justify-center">
        <NewsFeed />
      </div>
    </>
  );
}

export default App;
