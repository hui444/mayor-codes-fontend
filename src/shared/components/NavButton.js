import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import "./NavButton.css";

const NavButton = (props) => {
  const [changed, setChanged] = useState(false);

  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} 
        ${props.inverse && "button--inverse"} 
        ${props.danger && "button--danger"}
        ${props.cream && "button--cream"}`}
        href={props.href}
        target={props.target}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || "default"} 
        ${props.inverse && "button--inverse"} 
        ${props.danger && "button--danger"} 
        ${props.blue && "button--blue"}
        ${props.green && "button--green"}`}
      >
        {props.children}
      </Link>
    );
  }
  if (props.alertHome) {
    const popUp = (event) => {
      if (event) {
        if (
          window.confirm(
            "Are you sure you want to leave this page?" +
              "\n" +
              "Information will not be saved."
          )
        ) {
          setChanged(true);
        } else {
          setChanged(false);
        }
      }
    };

    if (changed) {
      return <Redirect to="/" />;
    }

    return (
      <Link
        exact={props.exact}
        className={`button button--${props.size || "default"}
        ${props.inverse && "button--inverse"}
        ${props.danger && "button--danger"}
        ${props.blue && "button--blue"}
        ${props.green && "button--green"}`}
        onClick={popUp}
      >
        {props.children}
      </Link>
    );
  }
  if (props.alertBookmark) {
    const popUp = (event) => {
      if (event) {
        if (
          window.confirm(
            "Are you sure you want to leave this page?" +
              "\n" +
              "Information will not be saved."
          )
        ) {
          setChanged(true);
        } else {
          setChanged(false);
        }
      }
    };

    if (changed) {
      return <Redirect to="/bookmark" />;
    }

    return (
      <Link
        exact={props.exact}
        className={`button button--${props.size || "default"}
        ${props.inverse && "button--inverse"}
        ${props.danger && "button--danger"}
        ${props.blue && "button--blue"}
        ${props.green && "button--green"}`}
        onClick={popUp}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} 
      ${props.inverse && "button--inverse"} 
      ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
