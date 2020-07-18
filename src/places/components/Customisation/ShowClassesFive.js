import React from "react";

import "./ShowClasses.css";
import ShowClasses from "./ShowClasses";

const ShowClassesFive = (props) => {
  return (
    <div className="Customisation-row">
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module1}
          information={props.information1}
          submitButton={props.submitButton}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module2}
          information={props.information2}
          submitButton={props.submitButton}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module3}
          information={props.information3}
          submitButton={props.submitButton}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module4}
          information={props.information4}
          submitButton={props.submitButton}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module5}
          information={props.information5}
          submitButton={props.submitButton}
        />
      </div>
    </div>
  );
};

export default ShowClassesFive;
