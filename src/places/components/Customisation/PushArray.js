const PushArray = (modArr, mod) => {
  if (document.getElementById(mod + "-tutID"))
    modArr.push(document.getElementById(mod + "-tutID").value);
  if (document.getElementById(mod + "-lecID"))
    modArr.push(document.getElementById(mod + "-lecID").value);
  if (document.getElementById(mod + "-secID"))
    modArr.push(document.getElementById(mod + "-secID").value);
  if (document.getElementById(mod + "-labID"))
    modArr.push(document.getElementById(mod + "-labID").value);
  if (document.getElementById(mod + "-recID"))
    modArr.push(document.getElementById(mod + "-recID").value);
};

export default PushArray;
