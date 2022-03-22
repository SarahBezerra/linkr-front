import { useState, useEffect } from "react";
import api from "../../../services";
import { ContentLikes, IconHeartRed, IconHeartDefault } from "./style";

export default function LikeHeart({ idPost, idStatus }) {
  const [like, setLike] = useState(idStatus || false); //pegar informação se post está com like

  async function likeOrNot() {
    setLike(!like);

    api.postLikeOrNot(idPost);
  }

  return (
    <ContentLikes>
      {like ? (
        <IconHeartRed onClick={likeOrNot} />
      ) : (
        <IconHeartDefault onClick={likeOrNot} />
      )}
      <p onClick={likeOrNot}>13 likes</p>
    </ContentLikes>
  );
}
