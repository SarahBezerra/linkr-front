import styled from "styled-components";

const BoxTag = styled.div`
  width: 100%;
  height: 61px;
  margin: 10px 0 -33px 0;

  background: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }

  div {
    display: flex;
    color: white;
    font-size: 16px;
    align-items: center;

    p {
      margin-right: 14px;
    }
  }
`;

export { BoxTag };
