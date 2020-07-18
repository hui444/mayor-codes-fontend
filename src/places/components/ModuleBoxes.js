// import React from "react";

// import "./ModuleBoxes.css";
// import InputBox from "../../shared/components/InputBox";
// import NavButton from "../../shared/components/NavButton";
// import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
// import { useForm } from "../../shared/hooks/form-hook";

// const FiveModuleBoxes = () => {
//   const [formState, inputHandler] = useForm(
//     {
//       mod1: {
//         value: "",
//         isValid: false,
//       },
//       mod2: {
//         value: "",
//         isValid: false,
//       },
//       mod3: {
//         value: "",
//         isValid: false,
//       },
//       mod4: {
//         value: "",
//         isValid: false,
//       },
//       mod5: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );

//   const createHandler = (event) => {
//     event.preventDefault();
//     console.log(formState.inputs);
//     // let array = [];
//     // for (let i = 1; i <= number; i++) {
//     //   array.push(document.getElementById("mod" + i).value);
//     // }

//     // console.log(array.map((k) => k.toUpperCase()));
//   };

//   const ModuleInputs = () => {
//     return (
//       <React.Fragment>
//         <h2 className="module-header">Modules :</h2>
//         <div className="input-container">
//           <InputBox
//             element="input"
//             id="mod1"
//             type="text"
//             placeholder="Module 1"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter a valid module code."
//             onInput={inputHandler}
//           />
//           <InputBox
//             element="input"
//             id="mod2"
//             type="text"
//             placeholder="Module 2"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter a valid module code."
//             onInput={inputHandler}
//           />
//           <InputBox
//             element="input"
//             id="mod3"
//             type="text"
//             placeholder="Module 3"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter a valid module code."
//             onInput={inputHandler}
//           />
//           <InputBox
//             element="input"
//             id="mod4"
//             type="text"
//             placeholder="Module 4"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter a valid module code."
//             onInput={inputHandler}
//           />
//           <InputBox
//             element="input"
//             id="mod5"
//             type="text"
//             placeholder="Module 5"
//             validators={[VALIDATOR_REQUIRE()]}
//             errorText="Please enter a valid module code."
//             onInput={inputHandler}
//           />
//         </div>
//       </React.Fragment>
//     );
//   };

//   return (
//     <form action="" id="form" onSubmit={createHandler}>
//       <div className="module-side">{ModuleInputs()}</div>
//       <div className="overload-side">
//         <div className="overloading-buttons">
//           <div className="extramodsButton">
//             <NavButton to="/create/sixmodules" blue>
//               I have Six Modules!
//             </NavButton>
//           </div>
//           <div className="extramodsButton">
//             <NavButton to="/create/sevenmodules" blue>
//               I have Seven Modules!
//             </NavButton>
//           </div>
//           <div className="extramodsButton">
//             <NavButton to="/create/eightmodules" blue>
//               I have Eight Modules!
//             </NavButton>
//           </div>
//         </div>
//         <div className="nextButton">
//           <NavButton type="submit" disabled={!formState.isValid}>
//             NEXT
//           </NavButton>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default FiveModuleBoxes;
