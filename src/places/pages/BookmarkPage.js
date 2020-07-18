import React from "react";

import BookmarkTable from "../components/BookmarkTable";
import "./BookmarkPage.css";
import Form from "../components/Form";
import NavButton from "../../shared/components/NavButton";

const ContentEditable = () => {
  var x = document.getElementById("myBookmarks");
  x.contentEditable = true;
};

const BookmarkPage = () => {
  const FormPopup = () => {
    document.getElementById("myForm").style.display = "block";
  };

  return (
    <React.Fragment>
      <div className="bookmark-page">
        <h2>Your Timetables</h2>
        <BookmarkTable /> <br /> <Form />
        <div className="add-edit-buttons">
          <NavButton onClick={FormPopup}>ADD</NavButton>
          <div className="divider" />
          <NavButton onClick={ContentEditable}>EDIT</NavButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookmarkPage;
