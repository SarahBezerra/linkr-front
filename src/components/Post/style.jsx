import styled from "styled-components";
import { devices } from "../../styles/responsiveness";

const Container = styled.div`
    display:flex;

    width: 100%;
    /* max-width:100%; */
    background-color: black;
    /* min-height: 300px; */
    border-radius: 16px;
    color: white;
    padding: 20px;

    z-index: 0;

`;

const Left = styled.div`
    width:12%;
    display: flex;
    flex-direction: column;

    @media ${devices.tablet} {
        width: 40px;
        margin-right: 14px;
    }
`;

const Main = styled.div`
    width: 88%;
    position: relative;

    a {
        cursor: pointer
    };

    h2, h3, h4 {
        overflow-wrap: break-word;
    }

    @media ${devices.tablet}{
        flex-grow: 1;
    }
`;

const UserName = styled.h2`
    font-size:19px;
    margin-bottom: 10px;
`;
const UserText = styled.h3`
    font-size:17px;
    color: #B7B7B7;
    margin-bottom: 12px;
`;

 const MetaContainer = styled.div`
    width:100%;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    display: flex;
 `;

const MetaLeft = styled.div`
    width: 70%;
    padding: 25px 28px 23px 20px;
`;

const UserPhoto = styled.img`
    border-radius: 50%;
    width: 55px;
    max-width: 80%;
    height: 55px;

    @media ${devices.tablet} {
        width: 40px;
        height:40px;
        max-width: initial;
    }


`

const ContentLikes = styled.div`
   width: 80%;
`;

const ContentComments = styled.div`
    margin-left: -13px;

    @media ${devices.tablet} {
        margin-left: -11px;
    }
`

const MetaRigth = styled.div`
    width: 30%;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    display: flex; 
    justify-content: center;
    align-items: center;
`;

 const Title = styled.h3`
    font-size: 16px;
    color: #CECECE;
    margin-bottom: 5px;
 `;

const Description = styled.h4`
    font-size: 11px;
    color: #9B9595;
    margin-bottom: 13px;
    line-height: 13px;
`;

const Url = styled.h4`
    font-size: 11px;
    color: #CECECE;
`;

const Preview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 0px 10px 10px 0px;
`;

const Hashtag = styled.span`
    font-weight: bold;
    color: white;
    cursor: pointer;
`
const Input = styled.textarea`
    width: 100%;
    font-size:17px;
    margin-bottom: 12px;
    background: #FFFFFF;
    border-radius: 7px;
    border: none;
    padding: 5px;
`;

export {
    Container,
    Left,
    Main,
    UserName,
    UserText,
    MetaContainer,
    Title,
    Description,
    Url,
    Preview,
    MetaLeft,
    MetaRigth,
    UserPhoto,
    ContentLikes,
    ContentComments,
    Hashtag,
    Input
}