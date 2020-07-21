import PushArray from "../PushArray";

const SubmittedSix = async (
  modArr1,
  modArr2,
  modArr3,
  modArr4,
  modArr5,
  modArr6,
  items,
  history
) => {
  PushArray(modArr1, items.module1, items.information1.classes);
  PushArray(modArr2, items.module2, items.information2.classes);
  PushArray(modArr3, items.module3, items.information3.classes);
  PushArray(modArr4, items.module4, items.information4.classes);
  PushArray(modArr5, items.module5, items.information5.classes);
  PushArray(modArr6, items.module6, items.information6.classes);

  try {
    const req = await fetch("http://localhost:5000/api/create/sixCustomised", {
      method: "POST",
      body: JSON.stringify({
        mod1Array: modArr1,
        mod2Array: modArr2,
        mod3Array: modArr3,
        mod4Array: modArr4,
        mod5Array: modArr5,
        mod6Array: modArr6,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const res = await req.json();
    console.log(res);
    history.push(`/create/timetableInformation/${res.customModule._id}`);
    //redirect to new page
  } catch (err) {}
};

export default SubmittedSix;
