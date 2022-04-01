import { useContext, useState } from "react";
import { PencilSharp, Trash } from "react-ionicons";
import ReactModal from "react-modal";

import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { BoxIcons } from "./style";
import ModalBlack from "../ModalBlack";
import PageContext from "../../contexts/pageContext";

ReactModal.setAppElement("#root");

export default function TrashAndEdit({
  idPost,
  setEditMessage,
  editMessage,
  refPostMessage,
  setMessage,
}) {
  const { auth } = useAuth();
  const { timeLine } = useContext(PageContext);
  const [wait, setWait] = useState(false);
  const [modal, setModal] = useState(false);

  async function handleClickDelete() {
    setWait(true);
    try {
      await api.deletePost(idPost, auth.token);
      setModal(false);
      timeLine.setPageAndReload();
    } catch (err) {
      setModal(false);
      alert("Não foi possível excluir este post!");
      console.log("aconteceu um erro em delete");
    } finally {
      setWait(false);
    }
  }

  async function handleClickEdit() {
    if (editMessage === true) {
      setEditMessage(false);
      setMessage(refPostMessage.current);
    } else {
      setEditMessage(true);
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
        onClick={() => handleClickEdit()}
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