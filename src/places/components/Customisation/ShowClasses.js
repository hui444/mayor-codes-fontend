import React from "react";

import "./ShowClasses.css";
import ShowDropDown from "./ShowDropDown";

const ShowClasses = (props) => {
  return (
    <div className="cusomisation">
      <div className="cusomisation--modulecode">
        <b>{props.modulecode}</b>
      </div>
      <ShowDropDown
        information={props.information}
        modulecode={props.modulecode}
      />
    </div>
  );
};

export default ShowClasses;
