import { useState } from "react";
import { ContentLikes, IconHeartRed, IconHeartDefault } from "./style";

export default function LikeHeart() {
  const [like, setLike] = useState(false);

  async function likeOrNot() {
    setLike(!like);
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
