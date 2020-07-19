import React from "react";

import "./ShowClasses.css";
import ShowDropDown from "./ShowDropDown";

const ShowClasses = (props) => {
  console.log(props.information);
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
