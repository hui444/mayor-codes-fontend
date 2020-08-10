import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./CreatePageMods.css";
import InputBox from "../../shared/components/InputBox";
import NavButton from "../../shared/components/NavButton";
import { VALIDATOR_MODULECODE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/ErrorModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import { backendURL } from "../../url";

const CreatePageFiveMods = () => {
  const { isLoading, error, clearError } = useHttpClient();

  const [NEXTisLoading, setNEXTisLoading] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      mod1: {
        value: "",
        isValid: false,
      },
      mod2: {
        value: "",
        isValid: false,
      },
      mod3: {
        value: "",
        isValid: false,
      },
      mod4: {
        value: "",
        isValid: false,
      },
      mod5: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const createHandler = async (event) => {
    setNEXTisLoading(true);
    event.preventDefault();
    try {
      console.log(backendURL + "/api/create/five");
      const req = await fetch(backendURL + "/api/create/five", {
        method: "POST",
        body: JSON.stringify({
          module1: formState.inputs.mod1.value,
          module2: formState.inputs.mod2.value,
          module3: formState.inputs.mod3.value,
          module4: formState.inputs.mod4.value,
          module5: formState.inputs.mod5.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const res = await req.json();
      history.push(`/create/customise/${res.module._id}`);
      //redirect to new page
    } catch (err) {}
  };

  const ModuleInputs = () => {
    return (
      <React.Fragment>
        <h2 className="module-header">Modules :</h2>
        <div className="input-container">
          <InputBox
            element="input"
            id="mod1"
            type="text"
            placeholder="Module 1"
            validators={[VALIDATOR_MODULECODE()]}
            errorText="Please enter a valid module code."
            onInput={inputHandler}
          />
          <InputBox
            element="input"
            id="mod2"
            type="text"
            placeholder="Module 2"
            validators={[VALIDATOR_MODULECODE()]}
            errorText="Please enter a valid module code."
            onInput={inputHandler}
          />
          <InputBox
            element="input"
            id="mod3"
            type="text"
            placeholder="Module 3"
            validators={[VALIDATOR_MODULECODE()]}
            errorText="Please enter a valid module code."
            onInput={inputHandler}
          />
          <InputBox
            element="input"
            id="mod4"
            type="text"
            placeholder="Module 4"
            validators={[VALIDATOR_MODULECODE()]}
            errorText="Please enter a valid module code."
            onInput={inputHandler}
          />
          <InputBox
            element="input"
            id="mod5"
            type="text"
            placeholder="Module 5"
            validators={[VALIDATOR_MODULECODE()]}
            errorText="Please enter a valid module code."
            onInput={inputHandler}
          />
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form action="" id="form" onSubmit={createHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        {NEXTisLoading && <LoadingSpinner loading />}
        <div className="module-side">{ModuleInputs()}</div>
        <div className="overload-side">
          <h3>
            Please click on one of these buttons if you have more than five
            modules.
          </h3>
          <div className="overloading-buttons">
            <div className="extramodsButton">
              <NavButton to="/create/sixmodules" blue>
                I have Six Modules!
              </NavButton>
            </div>
            <div className="extramodsButton">
              <NavButton to="/create/sevenmodules" blue>
                I have Seven Modules!
              </NavButton>
            </div>
            <div className="extramodsButton">
              <NavButton to="/create/eightmodules" blue>
                I have Eight Modules!
              </NavButton>
            </div>
          </div>
          <div className="nextButton">
            <NavButton type="submit" disabled={!formState.isValid}>
              NEXT
            </NavButton>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreatePageFiveMods;
