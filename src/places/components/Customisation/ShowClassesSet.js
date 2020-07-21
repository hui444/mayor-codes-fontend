import React from "react";

import "./ShowClasses.css";
import ShowClassesFive from "./ShowClassesFive";
import NavButton from "../../../shared/components/NavButton";
import SubmittedFive from "./submitted/SubmittedFive";
import SubmittedSix from "./submitted/SubmittedSix";
import { useHistory } from "react-router-dom";
import ShowClassesSix from "./ShowClassesSix";

const ShowClassesSet = (props) => {
  const modArr1 = [],
    modArr2 = [],
    modArr3 = [],
    modArr4 = [],
    modArr5 = [],
    modArr6 = [];

  const history = useHistory();

  const submitted = async (event) => {
    event.preventDefault();

    if (props.items.number === 5)
      SubmittedFive(
        modArr1,
        modArr2,
        modArr3,
        modArr4,
        modArr5,
        props.items,
        history
      );
    else if (props.items.number === 6)
      SubmittedSix(
        modArr1,
        modArr2,
        modArr3,
        modArr4,
        modArr5,
        modArr6,
        props.items,
        history
      );
  };

  if (props.items.number === 5) {
    return (
      <form className="showClassesSet--form" onSubmit={submitted}>
        <ShowClassesFive
          module1={props.items.module1}
          module2={props.items.module2}
          module3={props.items.module3}
          module4={props.items.module4}
          module5={props.items.module5}
          information1={props.items.information1}
          information2={props.items.information2}
          information3={props.items.information3}
          information4={props.items.information4}
          information5={props.items.information5}
        />
        <div className="customise-createButton">
          <NavButton type="submit">CREATE</NavButton>
        </div>
      </form>
    );
  }
  if (props.items.number === 6) {
    return (
      <form className="showClassesSet--form" onSubmit={submitted}>
        <ShowClassesSix
          module1={props.items.module1}
          module2={props.items.module2}
          module3={props.items.module3}
          module4={props.items.module4}
          module5={props.items.module5}
          module6={props.items.module6}
          information1={props.items.information1}
          information2={props.items.information2}
          information3={props.items.information3}
          information4={props.items.information4}
          information5={props.items.information5}
          information6={props.items.information6}
        />
        <div className="customise-createButton">
          <NavButton type="submit">CREATE</NavButton>
        </div>
      </form>
    );
  }
};

export default ShowClassesSet;
