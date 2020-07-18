import React from "react";

import Modal from "./Modal";
import NavButton from "./NavButton";

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<NavButton onClick={props.onClear}>Okay</NavButton>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
