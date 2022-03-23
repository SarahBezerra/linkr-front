import styled from 'styled-components'

const DropDownMenu = styled.button`

all:unset;

position: absolute;

width: 100px;
height: 40px;

display: flex;
align-items: center;
justify-content: center;

top:${props => props.dropDownDisplay === true? '100%':'-200px'};
right: 0;
transition: ${props => props.dropDownDisplay === true ?'top 0.5s ease-out' :'top 1s ease-in'};

z-index: 1;

background-color: #151515;
border-bottom-left-radius: 20px;

font-family: 'Lato', sans-serif;
font-weight: 700;
color: white;




`
export default DropDownMenu;