import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.div`
width: 100%;
height: 100vh;

display: flex;
justify-content: space-between;
background-color: #151515;

color: #fff;
font-family: 'Oswald';
font-weight: 700;
line-height: 64px;

.left-box{
    margin-left: 8%;
    margin-top: 20%;
}

h1{
    font-size: 106px;
    margin-bottom: 40px;
    font-family: 'Passion One';
}
p{
    font-size: 43px;
    font-family: 'Oswald';
}

`

export const RightBox = styled.div`
    height: 100vh;
    width: 36%;
    background-color: #333333;

    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20%;

    form{
        width: 100%;

        fieldset{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            input{
                width: 80%;
                height: 65px;

                background: #fff;
                border-radius: 6px;
                border: none;
                margin-bottom: 15px;

                color: #000;
                font-family: 'Oswald';
                font-size: 27px;
                font-size: 27px;
                font-weight: 700;
                line-height: 40px;
                padding: 0 16px;
            }

            button{
                width: 80%;
                height: 65px;

                background: #1877F2;
                border-radius: 6px;
                border: none;

                color: #FFFFFF;
                font-family: 'Oswald';
                font-size: 27px;
                font-size: 27px;
                font-weight: 700;
                line-height: 40px;
            }
        }
    }
`

export const StyledLink = styled(Link)`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    text-decoration-line: underline;
    color: #FFFFFF;

    margin-top: 16px;
`