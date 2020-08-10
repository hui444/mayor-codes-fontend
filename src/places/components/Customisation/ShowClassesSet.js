import React, { useState, Suspense } from "react";

import "./ShowClasses.css";
// import ShowClassesFive from "./ShowClassesFive";
// import ShowClassesSix from "./ShowClassesSix";
// import ShowClassesSeven from "./ShowClassesSeven";
// import ShowClassesEight from "./ShowClassesEight";
// import NavButton from "../../../shared/components/NavButton";
import SubmittedFive from "./submitted/SubmittedFive";
import SubmittedSix from "./submitted/SubmittedSix";
import SubmittedSeven from "./submitted/SubmittedSeven";
import SubmittedEight from "./submitted/SubmittedEight";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";

const ShowClassesFive = React.lazy(() => import("./ShowClassesFive"));
const ShowClassesSix = React.lazy(() => import("./ShowClassesSix"));
const ShowClassesSeven = React.lazy(() => import("./ShowClassesSeven"));
const ShowClassesEight = React.lazy(() => import("./ShowClassesEight"));
const NavButton = React.lazy(() =>
  import("../../../shared/components/NavButton")
);

const ShowClassesSet = (props) => {
  const modArr1 = [],
    modArr2 = [],
    modArr3 = [],
    modArr4 = [],
    modArr5 = [],
    modArr6 = [],
    modArr7 = [],
    modArr8 = [];

  const history = useHistory();

  const [NEXTisLoading, setNEXTisLoading] = useState(false);

  const submitted = async (event) => {
    setNEXTisLoading(true);
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
    else if (props.items.number === 7)
      SubmittedSeven(
        modArr1,
        modArr2,
        modArr3,
        modArr4,
        modArr5,
        modArr6,
        modArr7,
        props.items,
        history
      );
    else if (props.items.number === 8)
      SubmittedEight(
        modArr1,
        modArr2,
        modArr3,
        modArr4,
        modArr5,
        modArr6,
        modArr7,
        modArr8,
        props.items,
        history
      );
  };

  if (props.items.number === 5) {
    return (
      <form className="showClassesSet--form" onSubmit={submitted}>
        {NEXTisLoading && <LoadingSpinner loading />}
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
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
        </Suspense>
      </form>
    );
  }
  if (props.items.number === 6) {
    return (
      <form className="showClassesSet--form" onSubmit={submitted}>
        {NEXTisLoading && <LoadingSpinner loading />}
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
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
        </Suspense>
      </form>
    );
  }
  if (props.items.number === 7) {
    return (
      <form className="showClassesSet--form" onSubmit={submitted}>
        {NEXTisLoading && <LoadingSpinner loading />}
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <ShowClassesSeven
            module1={props.items.module1}
            module2={props.items.module2}
            module3={props.items.module3}
            module4={props.items.module4}
            module5={props.items.module5}
            module6={props.items.module6}
            module7={props.items.module7}
            information1={props.items.information1}
            information2={props.items.information2}
            information3={props.items.information3}
            information4={props.items.information4}
            information5={props.items.information5}
            information6={props.items.information6}
            information7={props.items.information7}
          />

          <div className="customise-createButton">
            <NavButton type="submit">CREATE</NavButton>
          </div>
        </Suspense>
      </form>
    );
  }
  if (props.items.number === 8) {
    return (
      <form className="showClassesSet--form" onSubmit={submitted}>
        {NEXTisLoading && <LoadingSpinner loading />}
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <ShowClassesEight
            module1={props.items.module1}
            module2={props.items.module2}
            module3={props.items.module3}
            module4={props.items.module4}
            module5={props.items.module5}
            module6={props.items.module6}
            module7={props.items.module7}
            module8={props.items.module8}
            information1={props.items.information1}
            information2={props.items.information2}
            information3={props.items.information3}
            information4={props.items.information4}
            information5={props.items.information5}
            information6={props.items.information6}
            information7={props.items.information7}
            information8={props.items.information8}
          />

          <div className="customise-createButton">
            <NavButton type="submit">CREATE</NavButton>
          </div>
        </Suspense>
      </form>
    );
  }
};

export default ShowClassesSet;
