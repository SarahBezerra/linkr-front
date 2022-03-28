import styled from 'styled-components'

const IntegrationContainer = styled.div`

position:relative;
z-index: 10;

width: 40%;

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

max-height: 200px;
height: 200px;
width: 100%;

background-color: lightgray;

position: absolute;
z-index: -1;
top:50%;
left: 0;

border-radius: 5px;
padding-top:25px;

display: flex;
flex-direction: column;

`

const User = styled.li`

width: 100%;
height: 50px;

background-color: lightblue;

` 


export {IntegrationContainer, BrowserContainer,InputContainer,IconContainer, UsersList, User}