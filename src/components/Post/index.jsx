import { Container, UserName, UserText, MetaContainer, Left, Main, Title, 
    Description, Url, Preview, MetaLeft, MetaRigth, UserPhoto, ContentLikes } from "./style";
import { DocumentTextOutline } from 'react-ionicons'
import LikeHeart from "../LikeHeart";


function Post({infos, like, updateLikes}){
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
                <UserText> { text } </UserText>
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


export default Post;