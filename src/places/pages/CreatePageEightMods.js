import React from "react";
import { useHistory } from "react-router-dom";

import "./CreatePageMods.css";
import InputBox from "../../shared/components/InputBox";
import NavButton from "../../shared/components/NavButton";
import { VALIDATOR_MODULECODE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/ErrorModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const CreatePageEightMods = () => {
  const { isLoading, error, clearError } = useHttpClient();

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
      mod6: {
        value: "",
        isValid: false,
      },
      mod7: {
        value: "",
        isValid: false,
      },
      mod8: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const createHandler = async (event) => {
    event.preventDefault();
    try {
      const req = await fetch("http://localhost:5000/api/create/eight", {
        method: "POST",
        body: JSON.stringify({
          module1: formState.inputs.mod1.value,
          module2: formState.inputs.mod2.value,
          module3: formState.inputs.mod3.value,
          module4: formState.inputs.mod4.value,
          module5: formState.inputs.mod5.value,
          module6: formState.inputs.mod6.value,
          module7: formState.inputs.mod7.value,
          module8: formState.inputs.mod8.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const res = await req.json();
      history.push(`/create/timetableInformation/${res.module._id}`);
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
          <InputBox
            element="input"
            id="mod6"
            type="text"
            placeholder="Module 6"
            validators={[VALIDATOR_MODULECODE()]}
            errorText="Please enter a valid module code."
            onInput={inputHandler}
          />
          <InputBox
            element="input"
            id="mod7"
            type="text"
            placeholder="Module 7"
            validators={[VALIDATOR_MODULECODE()]}
            errorText="Please enter a valid module code."
            onInput={inputHandler}
          />
          <InputBox
            element="input"
            id="mod8"
            type="text"
            placeholder="Module 8"
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
        <div className="module-side">{ModuleInputs()}</div>
        <div className="overload-side">
          <div className="bottom-nextButton">
            <NavButton type="submit" disabled={!formState.isValid}>
              NEXT
            </NavButton>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreatePageEightMods;
