// import React from "react";

// import "./ModuleInputBoxes.css";
// import InputBox from "../../shared/components/InputBox";
// import NavButton from "../../shared/components/NavButton";
// import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
// import { useForm } from "../../shared/hooks/form-hook";

// const ModuleInputBoxes = (props) => {
//   const [formState, inputHandler] = useForm(
//     {
//       mod1: {
//         value: "",
//         isValid: false,
//       },
//       // mod2: {
//       //   // value: "",
//       //   isValid: props.num === 2 ? false : true,
//       // },
//       // mod3: {
//       //   value: "",
//       //   isValid: props.num === 3 ? false : true,
//       // },
//       // mod4: {
//       //   value: "",
//       //   isValid: props.num === 4 ? false : true,
//       // },
//       // mod5: {
//       //   value: "",
//       //   isValid: props.num === 5 ? false : true,
//       // },
//       // mod6: {
//       //   value: "",
//       //   isValid: props.num === 6 ? false : true,
//       // },
//       // mod7: {
//       //   value: "",
//       //   isValid: props.num === 7 ? false : true,
//       // },
//       // mod8: {
//       //   value: "",
//       //   isValid: props.num === 8 ? false : true,
//       // },
//     },
//     false,
//     props.num
//   );

//   const number = props.num;

//   let content = [];
//   for (let i = 1; i <= number; i++) {
//     content.push(i);
//   }

//   const createHandler = (event) => {
//     event.preventDefault();
//     console.log(formState.inputs);
//     // let array = [];
//     // for (let i = 1; i <= number; i++) {
//     //   array.push(document.getElementById("mod" + i).value);
//     // }

//     // console.log(array.map((k) => k.toUpperCase()));
//   };

//   const inputContainers = content.map((a) => {
//     return (
//       <div className="input-container" key={a + 100}>
//         <InputBox
//           element="input"
//           id={"mod" + a}
//           type="text"
//           placeholder={"Module " + a}
//           validators={[VALIDATOR_REQUIRE()]}
//           errorText="Please enter a valid module code."
//           onInput={inputHandler}
//         />
//       </div>
//     );
//   });

//   return (
//     content.length !== 0 && (
//       <form action="" id="form" onSubmit={createHandler}>
//         <div className="moduleInput-seperator">
//           <div className="module-side">{inputContainers}</div>
//           <div className="preference-side">
//             <div className="createButton">
//               <NavButton
//                 // to="/create/customisation"
//                 type="submit"
//                 disabled={!formState.isValid}
//               >
//                 NEXT
//               </NavButton>
//             </div>
//           </div>
//         </div>
//       </form>
//     )
//   );
// };

// export default ModuleInputBoxes;
