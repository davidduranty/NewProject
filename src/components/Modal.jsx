import { useApi } from "../data/Context";

function Modal() {
  const { setShowModal } = useApi();
  function handleClickModal() {
    setShowModal(false);
  }
  return (
    <div className="modal-container">
      <h1>OUPS</h1>
      <p>Vous n'êtes pas enrengistrés!!</p>
      <button onClick={handleClickModal}>OK</button>
    </div>
  );
}

export default Modal;
