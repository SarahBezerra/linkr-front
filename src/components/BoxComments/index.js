import {
  ContainerComments,
  ContentComment,
  InformationsUser,
  CommentText,
  DividerLine,
  CommentUser,
  NewCommentContent,
  IconSend,
} from "./style";

export default function BoxComments() {
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
            </CommentText>
          </InformationsUser>
        </CommentUser>
        <DividerLine />
      </ContentComment>
      <NewCommentContent>
        <img src="https://randomuser.me/api/portraits/women/33.jpg" />
        <input placeholder="write a comment..." />
        <IconSend />
      </NewCommentContent>
    </ContainerComments>
  );
}
