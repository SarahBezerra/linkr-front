import styled from 'styled-components'
import { devices } from '../../../styles/responsiveness'

const IntegrationContainer = styled.div`

position:relative;
z-index: 10;

width: 40%;

@media ${devices.tablet}{
    position: inherit;
    margin-top:150px;
}

`
const BrowserContainer = styled.div`

all: unset;

width: 100%;
height: 45px;

display: flex;
align-items: center;

border-radius: 5px;
padding: 0 15px 0 10px;

background-color: white;

position: relative;

`

const InputContainer = styled.input`

all: unset;

width: 90%;
height: 100%;
`



const IconContainer = styled.button`

all: unset;

width: max-content;
height: 100%;

align-self: center;



`

const UsersList = styled.ul`

align-self: center;


max-height: 180px;
height: calc(${props => props.height});
width: 100%;

transition: height 1s;

background-color: #E7E7E7;

position: absolute;
z-index: -1;
top:50%;
left: 0;

overflow-y: scroll;

::-webkit-scrollbar{
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

box-sizing: border-box;

border-radius: 5px;
padding-top:25px;

display: flex;
flex-direction: column;

`

const User = styled.li`

width: 100%;
min-height: 50px;

padding: 0 10px;
border-radius: 5px;

display: flex;
flex-grow: 1;



img{
    height: 40px;
    width: 40px;
    align-self: center;
}

span{
    align-self: flex-start;

    color: #515151;

    display: flex;
    align-items: center;

    height: 100%;

    padding-left: 10px;
    flex-grow: 1;

}

` 


export {IntegrationContainer, BrowserContainer,InputContainer,IconContainer, UsersList, User}