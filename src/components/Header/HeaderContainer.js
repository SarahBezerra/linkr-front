
import styled from 'styled-components'

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
`

export default HeaderContainer