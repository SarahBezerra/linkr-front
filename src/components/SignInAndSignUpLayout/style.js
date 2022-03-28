import styled from "styled-components"
import { Link } from 'react-router-dom'
import { devices } from '../../styles/responsiveness';

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

@media ${devices.tablet}{
    justify-content: flex-start;
    flex-direction: column;
}

.left-box{
    margin-left: 8%;
    margin-top: 15%;

    @media ${devices.tablet}{
        margin: 50px 0 5% 0;
        text-align: center;
    }
}

h1{
    font-size: 106px;
    margin-bottom: 40px;
    font-family: 'Passion One';
    letter-spacing: 0.05em;

    @media ${devices.tablet}{
        margin-bottom: 10px;
    }
}
p{
    font-size: 43px;
    font-family: 'Oswald';
    line-height: 60px;
}

`

export const RightBox = styled.div`
    height: 100vh;
    width: 36%;
    background-color: #333333;

    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 12%;

    @media ${devices.laptopL}{
        height: 100%;
        width: 45%;
    }

    @media ${devices.tablet}{
        height: 100%;
        width: 100%;
    }

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

                background: ${(props) => props.isEnabled ? "#FFF" : "#C0C0C0"};
                border-radius: 6px;
                border: none;
                margin-bottom: 15px;

                color: ${(props) => props.isEnabled ? "#000" : "#696969"};
                font-family: 'Oswald';
                font-size: 27px;
                font-size: 27px;
                font-weight: 700;
                line-height: 40px;
                padding: 0 16px;
            }

            input::placeholder{
                color: #9F9F9F;
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
                opacity: ${(props) => props.isEnabled ? "1" : "0.7"};
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

    @media ${devices.tablet}{
        margin-bottom: 50px;
    }
`