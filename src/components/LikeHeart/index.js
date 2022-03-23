import { useState } from "react";
import api from "../../services";
import { ContentLikes, IconHeartRed, IconHeartDefault } from "./style";

export default function LikeHeart({ likesInformations }) {
  const [like, setLike] = useState(likesInformations.liked);

  async function likeOrNot() {
    setLike(!like);

    try {
      await api.postLikeOrNot(likesInformations.postId);
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
      <p onClick={likeOrNot}>{likesInformations.countLikes} likes</p>
    </ContentLikes>
  );
}
