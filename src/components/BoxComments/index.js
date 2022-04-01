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
  ContentLoading,
} from "./style";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import LoadingCircular from "../LoadingCircular";
import PulseLoader from "react-spinners/PulseLoader";

export default function BoxComments({ postId, numberComment, updateComments }) {
  const { auth } = useAuth();
  const [comment, setComment] = useState("");
  const [listComments, setListComments] = useState(false);
  const [waitLittle, setWaitLittle] = useState(false);
  const [waitLarge, setWaitLarge] = useState(false);

  useEffect(() => {
    getPostsWithId();
  }, []);

  async function getPostsWithId() {
    try {
      const res = await api.getCommentsPost(postId, auth.token);
      setListComments(res.data);
    } catch {
      console.log("Ocorrou um erro ao pegar comentários do post");
    }
  }

  async function postNewComment() {
    setWaitLittle(true);

    try {
      await api.postComment(auth.token, postId, comment);
      setComment("");
      setWaitLittle(false);
      setWaitLarge(true);
      await getPostsWithId();
      updateComments();
      setWaitLarge(false);
    } catch {
      console.log("Ocorrou um erro nos comentários");
    }
  }

  function handleInputChange(e) {
    setComment(e.target.value);
  }

  return (
    <>
      <ContainerComments>
        {listComments && !waitLarge ? (
          listComments.map((oneComment, i) => (
            <ContentComment key={i + oneComment.image_url}>
              <CommentUser>
                <img src={oneComment.image_url} alt=''/>
                <InformationsUser>
                  <div>
                    <p>{oneComment.username}</p>
                    {oneComment.followUser ? <span>• following</span> : ""}
                    {oneComment.authorPost ? <span>• post's author</span> : ""}
                  </div>
                  <CommentText>{oneComment.text}</CommentText>
                </InformationsUser>
              </CommentUser>
              <DividerLine />
            </ContentComment>
          ))
        ) : numberComment?.numbercomments > 0 ? (
          <ContentLoading>
            <PulseLoader />
          </ContentLoading>
        ) : (
          ""
        )}

        <NewCommentContent>
          <img src={auth.image_url} />
          <input
            value={comment}
            placeholder="write a comment..."
            onChange={handleInputChange}
          />
          <FloatingContainer>
            {waitLittle ? (
              <LoadingCircular size="16px" />
            ) : (
              <IconSend onClick={postNewComment} />
            )}
          </FloatingContainer>
        </NewCommentContent>
      </ContainerComments>
    </>
  );
}
