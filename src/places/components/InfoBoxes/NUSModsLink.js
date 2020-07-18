const NUSModsLink = (moduleCode, details) => {
  let tut = "",
    lec = "",
    sec = "",
    lab = "",
    rec = "";

  let i = 0;

  if (details.tutSlot) {
    tut = "TUT:" + details.tutSlot;
    ++i;
  }
  if (details.lecSlot) {
    if (i === 0) {
      lec = "LEC:" + details.lecSlot;
    } else {
      lec = ",LEC:" + details.lecSlot;
    }
    ++i;
  }
  if (details.secSlot) {
    if (i === 0) {
      sec = "SEC:" + details.secSlot;
    } else {
      sec = ",SEC:" + details.secSlot;
    }
    ++i;
  }
  if (details.labSlot) {
    if (i === 0) {
      lab = "LAB:" + details.labSlot;
    } else {
      lab = ",LAB:" + details.labSlot;
    }
    ++i;
  }
  if (details.recSlot) {
    rec = "REC:" + details.recSlot;
  }

  return `${moduleCode}=${tut}${lec}${sec}${lab}${rec}`;
};

export default NUSModsLink;
