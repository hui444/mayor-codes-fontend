import React from "react";
import FiveInfoBox from "./FiveInfoBox";
import SixInfoBox from "./SixInfoBox";
import SevenInfoBox from "./SevenInfoBox";
import EightInfoBox from "./EightInfoBox";

const InfoBoxSet = (props) => {
  if (props.items.number === 5) {
    return (
      <ul>
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
      </ul>
    );
  }
  if (props.items.number === 6) {
    return (
      <ul>
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
      </ul>
    );
  }
  if (props.items.number === 7) {
    return (
      <ul>
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
      </ul>
    );
  }
  if (props.items.number === 8) {
    return (
      <ul>
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
      </ul>
    );
  }
};

export default InfoBoxSet;
