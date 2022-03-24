import { Container, UserName, UserText, MetaContainer, Left, Main, Title, 
    Description, Url, Preview, MetaLeft, MetaRigth, UserPhoto, Likes } from "./style";
import { DocumentTextOutline } from 'react-ionicons'


function Post({infos}){
    const {
            id,
            userId,
            username,
            text,
            image_url,
            metaData,
    } = infos;


 
    console.log(metaData);

    return (
        <Container>
            <Left>
                <UserPhoto src={ image_url } alt=''/>
                <Likes></Likes>
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