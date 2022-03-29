
import styled from 'styled-components'
import { devices } from '../../styles/responsiveness'

const HeaderContainer = styled.header`

background-color: #151515;
display: ${props => props.display};

position: fixed;
z-index: 2;

top: 0;



width: 100%;
height: 72px;

h1{
    font-family: 'Passion One', cursive;
    font-weight: 700;
    font-size: 49px;
    color: white;

    align-self: center;
}

div{

    display: flex;
    align-items: center;
    
    gap: 10px;

    
}

span{
    align-self: center;
    height: 100%;
}

@media ${devices.tablet}{
    position: inherit;
}
`

export default HeaderContainer