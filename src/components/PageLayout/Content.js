import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Content = styled.div`

width: 100%;
height: 100vh;
padding-top: ${props => props.paddingTop};

background-color: #333333;

`
export default Content;

export function Test({children}){

    const location = useLocation();

    return(
        <Content paddingTop={location.pathname === '/login' ? '72px' : '0'}>
            {children}
        </Content>
    )
}