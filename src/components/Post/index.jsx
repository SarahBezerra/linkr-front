import { Container, UserName, UserText, MetaContainer, Left, Main, Title, 
    Description, Url, Preview, MetaLeft, MetaRigth, UserPhoto, ContentLikes, Hashtag, Input } from "./style";
import { DocumentTextOutline } from 'react-ionicons'
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";
import LikeHeart from "../LikeHeart";
import TrashAndEdit from "../TrashAndEdit";
import useAuth from "../../hooks/useAuth";
import React, { useState, useRef, useEffect } from "react";


function Post({infos, like, updateLikes, onNavigate, reloadPage}){
    const {auth} = useAuth()
    const [ editMessage, setEditMessage ] = useState(false)
    const refPostMessage = useRef(infos.text)
    const [ message, setMessage ] = useState(refPostMessage.current)

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
                {editMessage === true 
                    ? <MessageEditing setMessage={setMessage} message={message} setEditMessage={setEditMessage} refPostMessage={refPostMessage}></MessageEditing> 
                    : <Message ref={refPostMessage} reloadPage={reloadPage}>{ text }</Message>
                }

                   {userId === auth.userId 
                    ? <TrashAndEdit infos = {infos} setEditMessage={setEditMessage} editMessage={editMessage} refPostMessage={refPostMessage} setMessage={setMessage} /> 
                    : ''}

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


function MessageEditing({setMessage, message, setEditMessage, refPostMessage}){

    function handleInputChange(e) {
        setMessage( e.target.value );
    }

    function keyPress(event){
        if(window.event.keyCode === 27){
            setEditMessage(false)
            setMessage(refPostMessage.current)  
        } 
        else if(window.event.keyCode === 13){
            console.log("mandar pro db")
        } 


    }

    return(
        <Input name="text" value={message} onKeyDown={keyPress} onChange={handleInputChange} ></Input>
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