import { Container, UserName, UserText, MetaContainer, Left, Main, Title, 
    Description, Url, Preview, MetaLeft, MetaRigth, UserPhoto, ContentLikes, Hashtag } from "./style";
import { DocumentTextOutline } from 'react-ionicons'
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";
import LikeHeart from "../LikeHeart";
import { pagesList } from "../../pages/Timeline/utils";
import TrashAndEdit from "../TrashAndEdit";
import useAuth from "../../hooks/useAuth";

function Post({infos, like, updateLikes, onNavigate, reloadPage, setPageAndReload}){
    const {auth} = useAuth()

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
                <UserPhoto src={ image_url } onClick={onNavigate} alt=''/>
                <ContentLikes>
                    <LikeHeart idPost = {id} likesInformations={like || {}} updateLikes={updateLikes} />
                </ContentLikes> 
            </Left>
            <Main>
                <UserName onClick={onNavigate}> { username } </UserName>
                <Message reloadPage={reloadPage} setPageAndReload={setPageAndReload}>{ text }</Message>
                   {userId === auth.userId ? <TrashAndEdit idPost = {infos.id} reloadPage={reloadPage}  /> : ''}
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

function Message({children, setPageAndReload}){

    const navigate = useNavigate();

    function handleHashtagLink({innerText}){
            const hashtag = innerText.replace('#','');
            setPageAndReload(pagesList['hashtag']);
            navigate(`/hashtag/${hashtag}`);
    };

    return(
        <UserText>
            <ReactHashtag 
                renderHashtag={(hashtagValue) => (<Hashtag  key={hashtagValue} onClick={(e) => {handleHashtagLink(e.target)}}>{hashtagValue}</Hashtag>)} >
                {children}
            </ReactHashtag>
        </UserText>
    )
}
export default Post;