import "./Modal.css";

const ContentDefault = () => <p>No content</p>;

const Modal = ({ Content = ContentDefault, setModal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content">{<Content />}</div>
    </>
  );
};

export default Modal;
