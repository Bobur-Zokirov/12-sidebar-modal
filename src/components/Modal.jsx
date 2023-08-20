import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`${isModalOpen && "show-modal"} modal-overlay`}>
      <div className="modal-container">
        <h1 className="modal-content">Modal content</h1>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
