import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { SpinnerInfinity } from "spinners-react";
import useAuth from "../../hooks/useAuth";

import api from "../../services/api";
import { ContentLikes, IconHeartRed, IconHeartDefault } from "./style";

export default function LikeHeart({ idPost, likesInformations, updateLikes }) {
  const { auth } = useAuth();
  const [wait, setWait] = useState(false);
  const [like, setLike] = useState(likesInformations.liked || false);

  async function likeOrNot() {
    setWait(true);
    setLike(!like);

    try {
      await api.postLikeOrNot(idPost, auth.token);
      await updateLikes();

      setWait(false);
      ReactTooltip.rebuild();
    } catch {
      console.log("ocorreu um erro ao dar like");
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
          data-for="foo"
          data-tip={likesInformations?.arrayUsersNames?.join(", ")}
          data-tip-disable={likesInformations ? false : true}
          data-class={"tooltipConfig"}
        >
          <p>
            {likesInformations?.countLikes || 0}
            {likesInformations?.countLikes === "1" ? " like" : " likes"}
          </p>
        </a>
      )}
      <ReactTooltip
        id="foo"
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
