import { BoxComment, IconComment } from "./style";

export default function CommentChat({ idPost, stateComment, setComments }) {
  function handleClickComment() {
    setComments(!stateComment);
  }

  return (
    <BoxComment>
      <IconComment onClick={handleClickComment} />
      <p>12 comments</p>
    </BoxComment>
  );
}
