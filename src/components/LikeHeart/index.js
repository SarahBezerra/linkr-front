import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { SpinnerInfinity } from "spinners-react";

import api from "../../services/api";
import { ContentLikes, IconHeartRed, IconHeartDefault } from "./style";

export default function LikeHeart({ idPost, likesInformations, updateLikes }) {
  const [wait, setWait] = useState(false);
  const [like, setLike] = useState(likesInformations?.liked || false);
  console.log(likesInformations);

  async function likeOrNot() {
    setWait(true);
    setLike(!like);

    try {
      await api.postLikeOrNot(idPost, 1); //trocar userId = 1 pelo usuário mesmo
      await updateLikes();
      setWait(false);
    } catch {
      console.log("ocorreu um erro");
    }
  }

  return (
    <ContentLikes>
      {like ? (
        <IconHeartRed onClick={likeOrNot} />
      ) : (
        <IconHeartDefault onClick={likeOrNot} />
      )}
      {wait ? (
        <SpinnerInfinity
          size={15}
          thickness={100}
          speed={180}
          color="#AC0000"
          secondaryColor="#FFFFFF"
        />
      ) : (
        <a
          data-tip={`${likesInformations?.arrayUsersNames?.join(", ") || "no"}`}
          data-class={"tooltipConfig"}
        >
          <p>{likesInformations?.countLikes || 0} likes</p>
        </a>
      )}
      <ReactTooltip
        place="bottom"
        type="info"
        effect="float"
        delayHide={1000}
        backgroundColor={"rgba(255, 255, 255, 0.9)"}
        textColor={"rgba(80, 80, 80, 1)"}
      />
    </ContentLikes>
  );
}
