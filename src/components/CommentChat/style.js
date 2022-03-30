import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";

const BoxComment = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-size: 11px;

    :hover {
      cursor: pointer;
    }
  }
`;

const IconComment = styled(AiOutlineComment)`
  font-size: 17px;

  :hover {
    cursor: pointer;
  }
`;

export { BoxComment, IconComment };
