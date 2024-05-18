import { useTranslation } from "react-i18next";
import { useApi } from "../data/Context";

function Modal() {
  const { t } = useTranslation();

  const { setShowModal } = useApi();
  function handleClickModal() {
    setShowModal(false);
  }
  return (
    <div className="modal-container">
      <h1>OUPS</h1>
      <p>{t("title.register")}</p>
      <button onClick={handleClickModal}>OK</button>
    </div>
  );
}

export default Modal;
