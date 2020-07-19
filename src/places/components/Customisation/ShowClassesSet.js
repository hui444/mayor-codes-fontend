import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./ShowClasses.css";
import ShowClassesFive from "./ShowClassesFive";
import NavButton from "../../../shared/components/NavButton";
import PushArray from "./PushArray";

const ShowClassesSet = (props) => {
  const modArr1 = [],
    modArr2 = [],
    modArr3 = [],
    modArr4 = [],
    modArr5 = [];

  const [pressed, setPressed] = useState(false);

  const history = useHistory();
  const submitted = async (event) => {
    event.preventDefault();
    setPressed(true);

    PushArray(modArr1, props.items.module1, props.items.information1.classes);
    PushArray(modArr2, props.items.module2, props.items.information2.classes);
    PushArray(modArr3, props.items.module3, props.items.information3.classes);
    PushArray(modArr4, props.items.module4, props.items.information4.classes);
    PushArray(modArr5, props.items.module5, props.items.information5.classes);

    console.log(modArr1);
    console.log(modArr2);
    console.log(modArr3);
    console.log(modArr4);
    console.log(modArr5);
    try {
      const req = await fetch(
        "http://localhost:5000/api/create/fiveCustomised",
        {
          method: "POST",
          body: JSON.stringify({
            mod1Array: modArr1,
            mod2Array: modArr2,
            mod3Array: modArr3,
            mod4Array: modArr4,
            mod5Array: modArr5,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const res = await req.json();
      console.log(res);
      // history.push(`/create/customise/${res.module._id}`);
      history.push(`/create/timetableInformation/${res.customModule._id}`);
      //redirect to new page
    } catch (err) {}
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
          submitButton={pressed}
        />
        <div className="customise-createButton">
          <NavButton
            type="submit"
            // to={`/create/timetableInformation/${props.items._id}`}
          >
            CREATE
          </NavButton>
        </div>
      </form>
    );
  }
};

export default ShowClassesSet;
