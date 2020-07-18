import React from "react";
import { Link } from "react-router-dom";

import "./BookmarkCard.css";

const BookmarkCard = () => {
  return (
    <li className="bookmark-item">
      <div className="bookmark-flipcard">
        <div className="bookmark-flipcard__inner">
          <div className="bookmark-flipcard__front">
            <h1 className="bookmark-flipcard__front__title">BOOKMARK</h1>
          </div>
          <Link to="/bookmark">
            <div className="bookmark-flipcard__back">
              <p>
                <b>How To Bookmark:</b> <br /> <br />
                Click on the "Share/Sync" button on NUSMods website. Copy and
                paste the link onto your bookmark page.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default BookmarkCard;
