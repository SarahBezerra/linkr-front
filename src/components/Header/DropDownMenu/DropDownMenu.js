import styled from 'styled-components'

const DropDownMenu = styled.button`

all:unset;

position: absolute;

width: 100px;
height: 40px;

display: ${props => props.display};
align-items: center;
justify-content: center;

top:100%;
right: 0;

z-index: 1;

background-color: #151515;
border-bottom-left-radius: 20px;

font-family: 'Lato', sans-serif;
font-weight: 700;
color: white;

disabled: ${props => props.disabled};


`
export default DropDownMenu;