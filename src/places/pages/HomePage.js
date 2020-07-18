import React from "react";

import CreateCard from "../components/CreateCard";
import BookmarkCard from "../components/BookmarkCard";

import "./HomePage.css";

const HomeMain = () => {
  return (
    <div className="homeMain">
      <div className="row">
        <div className="left-home">
          <CreateCard />
        </div>
        <div className="right-home">
          <BookmarkCard />
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
