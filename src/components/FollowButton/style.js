import styled from "styled-components";

export const Button = styled.button`
width: 112px;
height: 31px;

background: ${(props) => props.enabled ? "#1877F2" : "#A9A9A9"};
border-radius: 5px;
border-style: none;

font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: ${(props) => props.enabled ? "#fff" : "#696969"};

&.unfollow{
    background-color: ${(props) => props.enabled ? "#fff" : "#A9A9A9"};
    color: ${(props) => props.enabled ? "#1877F2" : "#696969"};
}

&:hover{
    opacity: 0.8;
    font-size: 13px;
}
`