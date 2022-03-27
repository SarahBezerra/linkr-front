import { Container, UserName, UserText, MetaContainer, Left, Main, Title, 
    Description, Url, Preview, MetaLeft, MetaRigth, UserPhoto, ContentLikes, Hashtag } from "./style";
import { DocumentTextOutline } from 'react-ionicons'
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";
import LikeHeart from "../LikeHeart";
import TrashAndEdit from "../TrashAndEdit";

function Post({infos, like, updateLikes, reloadPage}){
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
                <ContentLikes>
                    <LikeHeart idPost = {id} likesInformations={like || {}} updateLikes={updateLikes} />
                </ContentLikes> 
            </Left>
            <Main>
                <UserName> { username } </UserName>
                <Message reloadPage={reloadPage}>{ text }</Message>
                   <TrashAndEdit infos = {infos} />
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

function Message({children, reloadPage}){

    const navigate = useNavigate();

    function handleHashtagLink({innerText}){
            reloadPage('');
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