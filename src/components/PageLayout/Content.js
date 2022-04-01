import styled from "styled-components";

const Content = styled.div`

width: 100%;
min-height: 100vh;
height:100%;


background-color: #333333;

`
export default Content;


// export function Test({children}){

//     const location = useLocation();

//     return(
//         <Content paddingTop={location.pathname === '/login' ? '72px' : '0'}>
//             {children}
//         </Content>
//     )
// }