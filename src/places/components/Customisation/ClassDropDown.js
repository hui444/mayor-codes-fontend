import React, { useState } from "react";

const ClassDropDown = (props) => {
  const [, setClassNum] = useState(
    props.modulecode + " " + props.className + " Choose"
  );

  const changeHandler = (event) => {
    setClassNum(event.target.value);
  };

  if (props.NumberofClasses > 1) {
    return (
      <React.Fragment>
        <br />
        <br />
        <label>{props.className + ":"}</label>
        <br />
        <select id={props.id} onChange={changeHandler}>
          <option
            value={props.modulecode + " " + props.className + " Choose"}
            selected="selected"
          >
            I have no preference
          </option>
          {props.classType.map((type, i) => {
            return (
              <option
                key={i}
                value={
                  props.modulecode + " " + props.className + " " + type.classNo
                }
              >
                {type.classNo}
              </option>
            );
          })}
        </select>
      </React.Fragment>
    );
  } else return null;
};

export default ClassDropDown;
