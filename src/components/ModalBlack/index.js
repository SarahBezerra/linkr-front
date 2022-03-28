import ReactModal from "react-modal";
import LoadingCircular from "../LoadingCircular";
import { stylizedModal, InsideModal, BoxButtons } from "./style";

export default function ModalBlack({
  loading,
  showModal,
  setShowModal,
  confirmFunction,
  questionTitle,
}) {
  return (
    <ReactModal isOpen={showModal} style={stylizedModal}>
      <InsideModal>
        {loading ? (
          <LoadingCircular />
        ) : (
          <>
            <h2>{questionTitle}</h2>
            <BoxButtons>
              <button onClick={() => setShowModal(false)}>No, go back</button>
              <button onClick={confirmFunction}>Yes, delete it</button>
            </BoxButtons>
          </>
        )}
      </InsideModal>
    </ReactModal>
  );
}
