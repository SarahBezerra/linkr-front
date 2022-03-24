import styled from "styled-components";


const Page = styled.div`
    width: 100%;
    padding-top: 72px;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    max-width: 940px;
    width: 100%;
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: center;
    gap: 25px;
`;
const Feed = styled.div`
    max-width: 611px;
    width: 67%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 50px;
`;

const Loading = styled(Feed)`
    min-height: 550px;
    border-radius: 16px;
    background-color: #00000014;
    padding-bottom: initial;

    svg {
        opacity: 60%;
    }
`;

const Empty = styled(Loading)`
    background-color: black;
    color: white;

    * {
        font-size: 30px;
        text-align:center;
    }
`;
const Error = Empty;




export {
    Feed,
    Container,
    Page,
    Loading,
    Empty,
    Error,
}