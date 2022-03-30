import { BoxComment, IconComment } from "./style";

export default function CommentChat({ number, stateComment, setComments }) {
  function handleClickComment() {
    setComments(!stateComment);
  }

  return (
    <BoxComment>
      <IconComment onClick={handleClickComment} />
      <p>
        {number?.numbercomments || 0}
        {number?.numbercomments !== 1 ? " comments" : " comment"}
      </p>
    </BoxComment>
  );
}
