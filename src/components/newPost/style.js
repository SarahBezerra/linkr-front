import styled from 'styled-components'


const Container = styled.div`

    width: 100%;
    /* max-width: 100%; */

    display: flex;
    flex-direction: column;
    align-items: center;
`

const PostContainer = styled.div`

    display:flex;
    
    width: 100%;
    height: 200px;

    padding: 20px 20px 20px 0;

    border-radius: 5px;

    background-color: #FFF;
`

const PictureContainer = styled.div`

width: 20%;
height:100%;

display: flex;
justify-content: center;
align-items: flex-start;

`

const PublishContainer = styled.form`

width:80%;
height: 100%;

display: flex;
flex-direction: column;

gap: 7px;

font-size: 0;


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

display: flex;
flex-direction: column;
justify-content: flex-start;

width:100%;
height: ${props => props.height};

overflow-wrap: break-word;

box-sizing: border-box;
border-radius: 5px;
padding: ${props => props.padding};

background-color: #EFEFEF;

font-size: 15px;
font-weight: 300;
color: #949494;

::placeholder{
    text-align: start;
}
`

const Button = styled.button`

all: unset;
align-self: flex-end;

width: 100px;
height: 30px;

border-radius: 5px;

background-color: #1877F2;

color: #FFF;
font-size:14px;
opacity: ${props => props.opacity};

text-align: center;


`

export {Container, PostContainer, PictureContainer, PublishContainer, Header, InputContainer, Button}