import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import LoadingCircular from "../LoadingCircular";
import {
  ContainerComments,
  ContentComment,
  InformationsUser,
  CommentText,
  DividerLine,
  CommentUser,
  NewCommentContent,
  IconSend,
  FloatingContainer,
} from "./style";

export default function BoxComments({ postId }) {
  const { auth } = useAuth();
  const [comment, setComment] = useState("");
  const [wait, setWait] = useState(false);

  async function postNewComment() {
    setWait(true);

    try {
      await api.postComment(auth.token, postId, comment);
      setWait(false);
    } catch {
      console.log("Ocorrou um erro nos comentários");
    }
  }

  function handleInputChange(e) {
    setComment(e.target.value);
  }

  return (
    <ContainerComments>
      <ContentComment>
        <CommentUser>
          <img src="https://randomuser.me/api/portraits/women/33.jpg" />
          <InformationsUser>
            <div>
              <p>Joaquina Tavares</p>
              <span>• following</span>
            </div>
            <CommentText>
              Também achei, mudou minha vidaTambém achei, mudou minha vida
              Também achei, mudou minha vida Também achei, mudou minha vida
              Também achei, mudou minha vida Também achei, mudou minha vida
              Também achei, mudou minha vida Também achei, mudou minha vida
              Também achei, mudou minha vida Também achei, mudou minha vida
            </CommentText>
          </InformationsUser>
        </CommentUser>
        <DividerLine />
      </ContentComment>
      <NewCommentContent>
        <img src="https://randomuser.me/api/portraits/women/33.jpg" />
        <input placeholder="write a comment..." onChange={handleInputChange} />
        <FloatingContainer>
          {wait ? (
            <LoadingCircular size="16px" />
          ) : (
            <IconSend onClick={postNewComment} />
          )}
        </FloatingContainer>
      </NewCommentContent>
    </ContainerComments>
  );
}
