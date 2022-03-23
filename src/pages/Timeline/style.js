import styled from "styled-components";

const PageContent = styled.div`
  width: 100%;
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
