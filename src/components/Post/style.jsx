import styled from "styled-components";

const Container = styled.div`
    display:flex;

    width: 600px;
    max-width:100%;
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
    align-items: flex-start;
`;

const Main = styled.div`
    width: 88%;

    a {
        cursor: pointer
    };
`;

const UserName = styled.h2`
    font-size:19px;
    margin-bottom: 10px;
`;
const UserText = styled.h2`
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
    margin-bottom: 20px;
`

const Likes = styled.div`
    background: repeating-linear-gradient( 135deg, #000000, #000000 14px, #fda607 -10px, #ff9900 25px);
    height: 50px;
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
    overflow-wrap: break-word;
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
    Likes,
}