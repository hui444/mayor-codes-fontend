import React, { useState } from "react";

import "./ShowClasses.css";
import ClassDropDown from "./ClassDropDown";

const ShowClasses = (props) => {
  const [TutNum, setTutNumber] = useState(
    props.modulecode + " Tutorial Choose"
  );

  const onChangeTut = (value) => {
    setTutNumber(value);
  };

  const [LecNum, setLecNumber] = useState(props.modulecode + " Lecture Choose");

  const onChangeLec = (value) => {
    setLecNumber(value);
  };

  const [SecNum, setSecNumber] = useState(
    props.modulecode + " Sectional Choose"
  );

  const onChangeSec = (value) => {
    setSecNumber(value);
  };

  const [LabNum, setLabNumber] = useState(
    props.modulecode + " Laboratory Choose"
  );

  const onChangeLab = (value) => {
    setLabNumber(value);
  };

  const [RecNum, setRecNumber] = useState(
    props.modulecode + " Recitation Choose"
  );

  const onChangeRec = (value) => {
    setRecNumber(value);
  };

  let array = [];

  if (props.submitButton) {
    if (props.information.tut !== 0) {
      array.push(TutNum);
    }
    if (props.information.lec !== 0) {
      array.push(LecNum);
    }
    if (props.information.sec !== 0) {
      array.push(SecNum);
    }
    if (props.information.lab !== 0) {
      array.push(LabNum);
    }
    if (props.information.rec !== 0) {
      array.push(RecNum);
    }
    // console.log(array);
  }

  return (
    <div className="cusomisation">
      <div className="cusomisation--modulecode">
        <b>{props.modulecode}</b>
      </div>
      <ClassDropDown
        onChangeClass={onChangeTut}
        NumberofClasses={props.information.tut}
        className="Tutorial"
        modulecode={props.modulecode}
        classType={props.information.tutorialType}
        id={props.modulecode + "-tutID"}
      />
      <ClassDropDown
        onChangeClass={onChangeLec}
        NumberofClasses={props.information.lec}
        className="Lecture"
        modulecode={props.modulecode}
        classType={props.information.lectureType}
        id={props.modulecode + "-lecID"}
      />
      <ClassDropDown
        onChangeClass={onChangeSec}
        NumberofClasses={props.information.sec}
        className="Sectional"
        modulecode={props.modulecode}
        classType={props.information.sectionalType}
        id={props.modulecode + "-secID"}
      />
      <ClassDropDown
        onChangeClass={onChangeLab}
        NumberofClasses={props.information.lab}
        className="Laboratory"
        modulecode={props.modulecode}
        classType={props.information.laboratoryType}
        id={props.modulecode + "-labID"}
      />
      <ClassDropDown
        onChangeClass={onChangeRec}
        NumberofClasses={props.information.rec}
        className="Recitation"
        modulecode={props.modulecode}
        classType={props.information.recitationType}
        id={props.modulecode + "-recID"}
      />
    </div>
  );
};

export default ShowClasses;
