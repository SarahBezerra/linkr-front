import styled from "styled-components";

const Container = styled.div`
    display:flex;

    width: 100%;
    /* max-width:100%; */
    background-color: black;
    /* min-height: 300px; */
    border-radius: 16px;
    color: white;
    padding: 20px;

`;

const Left = styled.div`
    width:12%;
    display: flex;
    flex-direction: column;
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
`

const ContentLikes = styled.div`
   width: 80%;
`;

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
    Hashtag
}