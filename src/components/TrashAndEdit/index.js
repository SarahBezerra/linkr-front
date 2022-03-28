import { PencilSharp, Trash } from "react-ionicons";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import BoxIcons from "./style";

export default function TrashAndEdit({ infos, setEditMessage, editMessage, refPostMessage, setMessage }) {
  const { auth } = useAuth();
  async function handleClickDelete() {
    const confirm = window.confirm("Deseja deletar?");

    if (!confirm) return;

    try {
      await api.deletePost(infos.id, auth.token);
      alert("deletado com sucesso");
    } catch (err) {
      console.log("aconteceu um erro em delete");
    }
  }

  async function handleClickEdit() {
    if(editMessage === true){
      setEditMessage(false)
      setMessage(refPostMessage.current)
    }else{
      setEditMessage(true)
    }
  }

  return (
    <BoxIcons>
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
        onClick={() => handleClickDelete()}
      />
    </BoxIcons>
  );
}
