import { useRef } from "react";
import { PencilSharp, Trash } from "react-ionicons";
import BoxIcons from "./style";

export default function TrashAndEditIcons() {
  const trashEvents = useRef();
  console.log(trashEvents);

  return (
    <BoxIcons>
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
      />
    </BoxIcons>
  );
}
