import React, { useState } from "react";

import "./ShowClasses.css";
import ClassDropDown from "./ClassDropDown";

const ShowClasses = (props) => {
  // const checkAnomaly = (classes, classType) => {
  //   if(classes === 2 && classType[0].classNo === classType[1].classNo)
  // }

  console.log(props.information);
  const showDropdown = () => {
    if (
      props.information.tut <= 1 &&
      props.information.lec <= 1 &&
      props.information.sec <= 1 &&
      props.information.lab <= 1 &&
      props.information.rec <= 1
    ) {
      if (
        props.information.tut +
          props.information.lec +
          props.information.sec +
          props.information.lab +
          props.information.rec ===
        0
      ) {
        return (
          <React.Fragment>
            <br />
            <br />
            No classes available.
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <br />
          <br />
          No customisation avaiable, all slots are allocated.
        </React.Fragment>
      );
    } else
      return (
        <React.Fragment>
          <ClassDropDown
            NumberofClasses={props.information.tut}
            className="Tutorial"
            modulecode={props.modulecode}
            classType={props.information.tutorialType}
            id={props.modulecode + "-tutID"}
          />
          <ClassDropDown
            NumberofClasses={props.information.lec}
            className="Lecture"
            modulecode={props.modulecode}
            classType={props.information.lectureType}
            id={props.modulecode + "-lecID"}
          />
          <ClassDropDown
            NumberofClasses={props.information.sec}
            className="Sectional"
            modulecode={props.modulecode}
            classType={props.information.sectionalType}
            id={props.modulecode + "-secID"}
          />
          <ClassDropDown
            NumberofClasses={props.information.lab}
            className="Laboratory"
            modulecode={props.modulecode}
            classType={props.information.laboratoryType}
            id={props.modulecode + "-labID"}
          />
          <ClassDropDown
            NumberofClasses={props.information.rec}
            className="Recitation"
            modulecode={props.modulecode}
            classType={props.information.recitationType}
            id={props.modulecode + "-recID"}
          />
        </React.Fragment>
      );
  };

  return (
    <div className="cusomisation">
      <div className="cusomisation--modulecode">
        <b>{props.modulecode}</b>
      </div>
      {showDropdown()}
    </div>
  );
};

export default ShowClasses;
