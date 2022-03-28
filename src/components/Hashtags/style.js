import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../styles/responsiveness";

const Container = styled.div`
  max-width: 301px;
  height: 406px;
  width: 32%;
  /* background: repeating-linear-gradient(
    135deg,
    #000000,
    #000000 14px,
    #fda607 -10px,
    #ff9900 25px
  ); */
  background-color: black;
  color:white;
  border-radius: 11px;

  font-family: 'Oswald';
  font-weight: 700;

  @media ${devices.tablet}{
        display : none;
    }
`;

const Title = styled.h2`
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 27px;
  border-bottom: 1px solid #484848;
  line-height:60px;
  padding-left: 16px;
  margin-bottom: 22px;
`

const Hashtag = styled.h3`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  margin-left: 16px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export { Container, Title, Hashtag };
