import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./InfoBoxesNum.css";
import NavButton from "../../../shared/components/NavButton";
import InfoBox from "./InfoBox";
import NUSModsLink from "./NUSModsLink";

const SixInfoBox = (props) => {
  let link =
    "https://nusmods.com/timetable/sem-1/share?" +
    NUSModsLink(props.module1, props.information1) +
    "&" +
    NUSModsLink(props.module2, props.information2) +
    "&" +
    NUSModsLink(props.module3, props.information3) +
    "&" +
    NUSModsLink(props.module4, props.information4) +
    "&" +
    NUSModsLink(props.module5, props.information5) +
    "&" +
    NUSModsLink(props.module6, props.information6);

  const clicked = () => {
    alert("Copied link to clipboard");
  };

  return (
    <React.Fragment>
      <div className="TimetableInfoPage-row">
        <div>
          <InfoBox
            modulecode={props.module1}
            information={props.information1}
            yellow
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module2}
            information={props.information2}
            blue
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module3}
            information={props.information3}
            orange
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module4}
            information={props.information4}
            green
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module5}
            information={props.information5}
            grey
          />
        </div>
        <div>
          <InfoBox
            modulecode={props.module6}
            information={props.information6}
            purple
          />
        </div>
      </div>
      <div className="BottomButtons">
        <NavButton href={link} target="_blank" cream>
          Finish creating at NUSMods
        </NavButton>
        <NavButton alertBookmark green>
          Bookmark
        </NavButton>
      </div>
      <br />
      <div className="words">
        <div className="BottomButtons--Instructions">
          <center>
            Click on this button to be directed to NUSMods, where your timetable
            will be reflected.
            <br />
            <b> To save your current timetable,</b> click on "Share/Sync" and
            copy the link provided. Then, click on the <b>Bookmark</b> button to
            be redirected to the Bookmark's Page.
          </center>
        </div>
        <div className="clipboard-bar">
          or Click "Copy Link" to copy given link
          <br />
          <br />
          <div className="link-button">
            <CopyToClipboard text={link}>
              <NavButton onClick={clicked}>Copy Link</NavButton>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SixInfoBox;
