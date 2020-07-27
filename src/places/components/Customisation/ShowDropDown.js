import React from "react";

import ClassDropDown from "./ClassDropDown";

const ShowDropDown = (props) => {
  if (
    //only 1 class available
    props.information.tut <= 1 &&
    props.information.lec <= 1 &&
    props.information.sec <= 1 &&
    props.information.lab <= 1 &&
    props.information.rec <= 1
  ) {
    if (
      //no classes
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
        No customisation available, all slots are allocated.
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

export default ShowDropDown;
