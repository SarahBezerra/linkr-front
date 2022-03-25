import styled from 'styled-components'

const Img = styled.img`

all: unset;

height:${props => props.height};
width: ${props => props.height};

border-radius: 50%;

background-color: lightyellow;

`

export default Img;