import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { devices } from "../../styles/responsiveness";

const ContainerComments = styled.div`
  width: 100%;
  min-height: 40px;
  margin-top: -46px;
  padding: 16px 20px 0 20px;

  background-color: #1e1e1e;
  border-radius: 0 0 16px 16px !important;

  display: flex;
  flex-direction: column;

  img {
    clip-path: circle();
    height: 39px;
    width: 39px;
    margin-right: 18px;
  }
`;

const ContentComment = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;

  img {
    :hover {
      cursor: pointer;
    }
  }

  div {
    display: flex;

    p {
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const CommentUser = styled.div`
  margin: 15px 0;
`;

const InformationsUser = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #f3f3f3;
  }

  span {
    margin-left: 4px;
    color: #565656;
  }
`;

const CommentText = styled.p`
  margin-top: 5px;
  color: #acacac !important;

  :hover {
    cursor: auto !important;
  }
`;

const DividerLine = styled.div`
  height: 0;
  width: 100%;
  border: 1px solid #353535;
`;

const NewCommentContent = styled.div`
  margin: 20px 0 25px 0;
  display: flex;

  position: relative;

  input {
    width: 89%;
    height: 39px;
    padding: 0 33px 0 15px;
    color: white;

    background: #252525;
    border: none;
    border-radius: 8px;

    ::placeholder {
      font-style: italic;
      font-weight: 400;
      color: #575757;
    }

    @media ${devices.tablet} {
      padding-right: 10px;
    }
  }
`;

const FloatingContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
`;

const IconSend = styled(FiSend)`
  color: #f3f3f3;
  font-size: 15px;

  :hover {
    cursor: pointer;
  }

  @media ${devices.tablet} {
    right: 6px;
  }
`;

const ContentLoading = styled.div`
  display: flex;
  height: 50px;
  padding-top: 20px;
  justify-content: center;
  width: 100%;

  span {
    transform: rotate(90deg);
  }
`;

export {
  ContainerComments,
  ContentComment,
  DividerLine,
  CommentUser,
  InformationsUser,
  CommentText,
  NewCommentContent,
  ContentLoading,
  IconSend,
  FloatingContainer,
};
