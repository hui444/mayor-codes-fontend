import React, { Suspense } from "react";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";

// import FiveInfoBox from "./FiveInfoBox";
// import SixInfoBox from "./SixInfoBox";
// import SevenInfoBox from "./SevenInfoBox";
// import EightInfoBox from "./EightInfoBox";

const FiveInfoBox = React.lazy(() => import("./FiveInfoBox"));
const SixInfoBox = React.lazy(() => import("./SixInfoBox"));
const SevenInfoBox = React.lazy(() => import("./SevenInfoBox"));
const EightInfoBox = React.lazy(() => import("./EightInfoBox"));

const InfoBoxSet = (props) => {
  if (props.items.number === 5) {
    return (
      <ul>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <FiveInfoBox
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
        </Suspense>
      </ul>
    );
  }
  if (props.items.number === 6) {
    return (
      <ul>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <SixInfoBox
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
        </Suspense>
      </ul>
    );
  }
  if (props.items.number === 7) {
    return (
      <ul>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <SevenInfoBox
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
        </Suspense>
      </ul>
    );
  }
  if (props.items.number === 8) {
    return (
      <ul>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <EightInfoBox
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
        </Suspense>
      </ul>
    );
  }
};

export default InfoBoxSet;
