import styled from "styled-components";

const PageContent = styled.div`
  width: 100%;
  min-height: 100vh;

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
  width: 86px;
`;

export { PageContent, Posts, ColumnLeft };
