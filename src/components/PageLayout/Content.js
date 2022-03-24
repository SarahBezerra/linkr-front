import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Content = styled.div`
<<<<<<< HEAD

width: 100%;
height: 100vh;
padding-top: ${props => props.paddingTop};

background-color: #333333;

`
export default Content;
=======
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 72px;
    background-color: #333333;
`;
>>>>>>> bbfb1ec7f153c8fb761e2a4c3ac61e4d9982e7d3

export function Test({children}){

    const location = useLocation();

    return(
        <Content paddingTop={location.pathname === '/login' ? '72px' : '0'}>
            {children}
        </Content>
    )
}