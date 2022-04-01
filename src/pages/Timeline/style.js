import styled from "styled-components";
import { devices } from "../../styles/responsiveness";

const Page = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    padding: 0 10px 0 10px;
    width: 100%;
    max-width: 940px;
  }

  @media ${devices.tablet} {
    & > * {
      width: 100%;
      padding: initial;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 43px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFF;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 43px;

  div {
    display: flex;
    align-items: center;
  }

  img{
    width: 50px;
    height: 50px;

    margin-right: 10px;

    border-radius: 50%;
  }

  span {
    font-family: 'Oswald';
    font-weight: 700;

    align-self: flex-end;
  }

  @media ${devices.tablet} {
    margin-left: 17px;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;  
`;

const Feed = styled.div`
  max-width: 611px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 50px;

  & > div {
    border-radius: 16px;
  }

  @media ${devices.tablet} {
    max-width: initial;
    width: 100%;

    & > div {
      border-radius: 0px;
    }
  }
`;

const Loading = styled(Feed)`
  height: 100%;
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
<<<<<<< HEAD
  width: 100%;
=======
  width:100%;
>>>>>>> searchBarImprov

  * {
    font-size: 30px;
    text-align: center;
    line-height: 40px;
  }
`;
const Error = Empty;

export { Feed, Container, Page, Loading, Empty, Error, Title };
