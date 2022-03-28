import styled from 'styled-components'
import { pagesList } from '../../pages/Timeline/utils';
import { devices } from '../../styles/responsiveness';


const Container = styled.div`
    width: 100%;

    display: ${({currentPage}) =>(currentPage() !== pagesList['timeline']) ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

const PostContainer = styled.div`

    display:flex;
    
    width: 100%;
    height: 200px;

    padding: 20px 20px 20px 20px;

    background-color: #FFF;

    @media ${devices.tablet}{
        padding: 15px 15px 12px 15px;
    }
`

const PictureContainer = styled.div`

    
    height:100%;
    margin-right: 18px;


    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${devices.tablet}{
        display: none;
    }

`

const PublishContainer = styled.form`

    flex-grow: 1;
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 7px;

    font-size: 0;

    @media ${devices.tablet}{
        width:100%
    }


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

@media ${devices.tablet} {
    margin-top: auto;
}


`

export {Container, PostContainer, PictureContainer, PublishContainer, Header, InputContainer, Button}