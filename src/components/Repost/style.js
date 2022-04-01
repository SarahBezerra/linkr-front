import styled from "styled-components";
import { BiRepost } from "react-icons/bi";

const BoxRePost = styled.div`
  display: ${({show}) => (!show) ? 'none' : 'flex'};

  margin-top: 15px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    text-align: center;
    font-size: 11px;

    :hover {
      cursor: pointer;
    }
  }
`;

const IconRePost = styled(BiRepost)`
  font-size: 18px;

  :hover {
    cursor: pointer;
  }
`;

const IconRePostMarked = styled(IconRePost)`
  color: blue;
`;


export { BoxRePost, IconRePost, IconRePostMarked};