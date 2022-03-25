import { Container, UserName, UserText, MetaContainer, Left, Main, Title, 
    Description, Url, Preview, MetaLeft, MetaRigth, UserPhoto, Likes, Hashtag } from "./style";
import { DocumentTextOutline } from 'react-ionicons'
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";

function Post({infos}){
    const {
            id,
            userId,
            username,
            text,
            image_url,
            metaData,
    } = infos;

    return (
        <Container>
            <Left>
                <UserPhoto src={ image_url } alt=''/>
                <Likes></Likes>
            </Left>
            <Main>
                <UserName> { username } </UserName>
                <Message>{ text }</Message>

                <a href={metaData.url} target='_blank' rel='noreferrer' >
                    <MetaContainer>
                        <MetaLeft>
                            <Title> { metaData.title } </Title>
                            <Description> { metaData.description } </Description>
                            <Url> { metaData.url } </Url>
                        </MetaLeft>
                        <MetaRigth>
                        {(metaData.image !== '')
                            ? <Preview src={ metaData.image } alt='' />
                            : <DocumentTextOutline color={'#000000'} height="70px" width="70px" />
                        }
                        </MetaRigth>
                    </MetaContainer>
                </a>
            </Main>
                
        </Container>
    )
}

function Message({children}){

    const navigate = useNavigate();

    function handleHashtagLink({innerText}){
            const hashtag = innerText.replace('#','');
            navigate(`/hashtag/${hashtag}`);
    };

    return(
        <UserText>
            <ReactHashtag 
                renderHashtag={(hashtagValue) => (<Hashtag onClick={(e) => {handleHashtagLink(e.target)}}>{hashtagValue}</Hashtag>)} >
                {children}
            </ReactHashtag>
        </UserText>
    )
}



export default Post;