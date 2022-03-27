import { useState } from "react";
import { PencilSharp, Trash } from "react-ionicons";
import ReactModal from "react-modal";

import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { BoxIcons } from "./style";
import ModalBlack from "../ModalBlack";

ReactModal.setAppElement("#root");
// Modal.setAppElement("#root");

const customStyles = {
  content: {},
};

export default function TrashAndEdit({ infos }) {
  const { auth } = useAuth();
  const [wait, setWait] = useState(false);
  const [modal, setModal] = useState(false);

  async function handleClickDelete() {
    setWait(true);
    try {
      await api.deletePost(infos.id, auth.token);
      setModal(false);
      setWait(false);
    } catch (err) {
      console.log("aconteceu um erro em delete");
    }
  }

  return (
    <BoxIcons>
      <ModalBlack
        loading={wait}
        showModal={modal}
        setShowModal={setModal}
        confirmFunction={handleClickDelete}
        questionTitle={"Are you sure you want to delete this post?"}
      />
      <PencilSharp
        color={"#FFFFFF"}
        rotate={false}
        title={"editar"}
        height="14px"
        width="14px"
      />
      <Trash
        color={"#FFFFFF"}
        title={"apagar"}
        shake={false}
        height="14px"
        width="14px"
        onClick={() => setModal(true)}
      />
    </BoxIcons>
  );
}
