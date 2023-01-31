import React from "react";
import "../ModalAdd.css";
import FormFilter from "./FormFilter";

const ModalFilterAdd = ({ title, active, CloseModal, setFilterValue,setFormInputsFilter }) => {
  if (!active) {
    return null;
  }
  return (
    <div className="Modal" onClick={CloseModal}>
      <div
        className="ModalContent filter"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="ModalHeader">
          <div className="ModalTitle">{title}</div>
        </div>
        <div className="ModalBody">
          <FormFilter setFormInputsFilter={setFormInputsFilter} setFilterValue={setFilterValue} CloseModal={CloseModal} />
        </div>
      </div>
    </div>
  );
};
export default ModalFilterAdd;
