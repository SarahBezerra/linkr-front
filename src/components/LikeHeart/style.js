import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import styled from "styled-components";

const ContentLikes = styled.div`
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tooltipConfig {
    padding: 5.5px 6.5px !important;
    font-size: 11px;
    border-radius: 3px;
  }

  p {
    color: white;
    font-size: 11px;

    :hover {
      cursor: pointer;
    }
  }
`;

const IconHeartRed = styled(HiHeart)`
  color: #ac0000;
  font-size: 18px;
  margin-bottom: 4px;

  :hover {
    cursor: pointer;
  }
`;

const IconHeartDefault = styled(HiOutlineHeart)`
  color: white;
  font-size: 18px;
  margin-bottom: 4px;

  :hover {
    cursor: pointer;
  }
`;

export { IconHeartRed, IconHeartDefault, ContentLikes };
