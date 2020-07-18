import React from "react";

const FormInput = (props) => {
  return (
    <div>
      <label>
        <b>{props.label}</b>
      </label>{" "}
      <br />
      <input type="text" placeholder={props.text}></input>
    </div>
  );
};

export default FormInput;
