import { useState } from "react";
import { PencilSharp, Trash } from "react-ionicons";
import ReactModal from "react-modal";

import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { BoxIcons } from "./style";
import ModalBlack from "../ModalBlack";

ReactModal.setAppElement("#root");

export default function TrashAndEdit({ idPost, reloadPage }) {
  const { auth } = useAuth();
  const [wait, setWait] = useState(false);
  const [modal, setModal] = useState(false);

  async function handleClickDelete() {
    setWait(true);
    try {
      await api.deletePost(idPost, auth.token);
      setModal(false);
      reloadPage(0); // fazer o reload
    } catch (err) {
      setModal(false);
      alert("Não foi possível excluir este post!");
      console.log("aconteceu um erro em delete");
    } finally {
      setWait(false);
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
