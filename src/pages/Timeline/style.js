import styled from "styled-components";

const PageContent = styled.div`
  width: 100%;
  padding-top: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #333333; ;
`;

const Posts = styled.div`
  height: 276px;
  width: 611px;
  border-radius: 16px;

  display: flex;
  background-color: #171717;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 87px;
`;

export { PageContent, Posts, ColumnLeft, ContentLikes };

const Page = styled.div`
  width: 100%;
  padding-top: 72px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 940px;
  width: 100%;
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: center;
  gap: 25px;
`;
const Feed = styled.div`
  max-width: 611px;
  width: 67%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 50px;
`;

const Loading = styled(Feed)`
  min-height: 550px;
  border-radius: 16px;
  background-color: #00000014;
  padding-bottom: initial;

  svg {
    opacity: 60%;
  }
`;

const Empty = styled(Loading)`
  background-color: black;
  color: white;

  * {
    font-size: 30px;
    text-align: center;
  }
`;
const Error = Empty;

export { Feed, Container, Page, Loading, Empty, Error };
