import React from "react";

import "./HoverDescription.css";

const HoverDescription = (props) => {
  return (
    <div className="text">
      {props.text}
      <span className="description">{props.desc}</span>
    </div>
  );
};

export default HoverDescription;
