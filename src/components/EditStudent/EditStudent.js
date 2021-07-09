import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditStudent = ({ modalIsOpen, closeModal, name }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Edit is under development</h2>
        <button onClick={closeModal} type="button" class="btn btn-primary">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default EditStudent;
