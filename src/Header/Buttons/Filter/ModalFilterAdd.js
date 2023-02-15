import "../ModalAdd.css";
import FormFilter from "./FormFilter";

const ModalFilterAdd = ({ title, active, CloseModal,setFormInputsFilter,setCurrantPage}) => {
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
          <FormFilter setCurrantPage={setCurrantPage} setFormInputsFilter={setFormInputsFilter} CloseModal={CloseModal} />
        </div>
      </div>
    </div>
  );
};
export default ModalFilterAdd;
