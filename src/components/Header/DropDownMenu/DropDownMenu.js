import styled from 'styled-components'

const DropDownMenu = styled.ul`

position: absolute;

width: 100px;
height: 40px;

display: flex;
align-items: center;
justify-content: center;

top:${props => props.top};
transition: top 1s;
right: 0;

z-index: 1;

background-color: #151515;

font-family: 'Lato', sans-serif;
font-weight: 700;
color: white;

border-bottom-left-radius: 20px;

`
export default DropDownMenu;