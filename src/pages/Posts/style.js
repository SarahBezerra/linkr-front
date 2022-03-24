import styled from 'styled-components'

const PostContainer = styled.div`

display:flex;

width: 45vw;
height: 200px;

margin-top: 150px;
padding: 2%;

border-radius: 5px;

background-color: #FFF;


`

const PictureContainer = styled.div`

width: 20%;
height:100%;

`

const PublishContainer = styled.form`

width:80%;
height: 100%;

display: flex;
flex-direction: column;

gap: 5px;

`

const Header = styled.h1`

color: gray;
font-weight: 300;
font-size: 20px;
line-height: 24px;

`

const InputContainer = styled.input`

all: unset;
text-align: start;



width:100%;
height: ${props => props.height};

box-sizing: border-box;
border-radius: 5px;
padding: 0 15px 0 15px;

background-color: #EFEFEF;

font-size: 15px;
font-weight: 300;
color: #949494;

::placeholder{
    text-align: start;
    transform:translate3d(0,-20px,0)
}
`

export {PostContainer, PictureContainer, PublishContainer, Header, InputContainer}