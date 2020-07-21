import React from "react";

import "./ShowClasses.css";
import ShowClasses from "./ShowClasses";

const ShowClassesSeven = (props) => {
  return (
    <React.Fragment>
      <div className="Customisation-row">
        <div className="Customisation-col">
          <ShowClasses
            modulecode={props.module1}
            information={props.information1}
          />
        </div>
        <div className="Customisation-col">
          <ShowClasses
            modulecode={props.module2}
            information={props.information2}
          />
        </div>
        <div className="Customisation-col">
          <ShowClasses
            modulecode={props.module3}
            information={props.information3}
          />
        </div>
        <div className="Customisation-col">
          <ShowClasses
            modulecode={props.module4}
            information={props.information4}
          />
        </div>
        <div className="Customisation-col">
          <ShowClasses
            modulecode={props.module5}
            information={props.information5}
          />
        </div>
        <div className="Customisation-col">
          <ShowClasses
            modulecode={props.module6}
            information={props.information6}
          />
        </div>
      </div>
      <div className="Customisation-row">
        <div className="Customisation-col">
          <ShowClasses
            modulecode={props.module7}
            information={props.information7}
          />
        </div>
        <div className="Customisation-col" />
        <div className="Customisation-col" />
        <div className="Customisation-col" />
        <div className="Customisation-col" />
        <div className="Customisation-col" />
      </div>
    </React.Fragment>
  );
};

export default ShowClassesSeven;
