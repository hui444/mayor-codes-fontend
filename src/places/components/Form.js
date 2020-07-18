import React from "react";
import "./Form.css";
import { useForm } from "../../shared/hooks/form-hook";
import InputBox from "../../shared/components/InputBox";
import NavButton from "../../shared/components/NavButton";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const Form = () => {
  const FormClose = () => {
    document.getElementById("myForm").style.display = "none";
  };

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },

      link: {
        value: "",
        isValid: false,
      },

      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);

    const newBookmark = {
      title: formState.title,
      link: formState.link,
      description: formState.description,
    };
  };

  return (
    <div className="form-popup" id="myForm">
      <form onSubmit={formSubmitHandler}>
        <InputBox
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />

        <InputBox
          id="link"
          element="input"
          type="text"
          label="Link"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid link."
          onInput={inputHandler}
        />

        <InputBox
          id="description"
          element="input"
          type="text"
          label="Modules Taken"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter valid modules."
          onInput={inputHandler}
        />

        <NavButton type="submit" disabled={!formState.isValid}>
          ADD
        </NavButton>
        <button onClick={FormClose}>CANCEL</button>
      </form>
    </div>
  );
};

export default Form;
