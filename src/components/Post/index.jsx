import { PostContainer, Container, UserName, UserText, MetaContainer, Left, Main, Title, 
    Description, Url, Preview, MetaLeft, MetaRigth, UserPhoto, ContentLikes, Hashtag, Input, SharedInfo, ContentComments, ContentRePosts } from "./style";
import CommentChat from "../CommentChat";
import BoxComments from "../BoxComments";
import { DocumentTextOutline } from 'react-ionicons'
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";
import LikeHeart from "../LikeHeart";
import { pagesList } from "../../pages/Timeline/utils";
import TrashAndEdit from "../TrashAndEdit";
import useAuth from "../../hooks/useAuth";
import React, { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";
import PageContext from "../../contexts/pageContext";
import RePost from "../Repost";

function Post({infos, like, updateLikes, numberComment,updateComments, onNavigate, reloadPage}){
    const { timeLine } = useContext(PageContext);
    const {auth} = useAuth()
    const token = auth.token;
    const [ editMessage, setEditMessage ] = useState(false)
    const refPostMessage = useRef(infos.text)
    const [ message, setMessage ] = useState(refPostMessage.current)
    const [ isEnabled, setIsEnabled ] = useState(true)
    const [ enabledComment, setEnabledComment] = useState(false)

    const {
            id,
            userId,
            username,
            text,
            image_url,
            metaData,
            repost,
    } = infos;

    return (
        <Container>
            {(repost) && 
            <SharedInfo> <img src='https://i.imgur.com/UA6vhit.png' alt='' />  
                <p> Reposted by <span>{repost?.reposterName}</span></p>
            </SharedInfo>
            }
            <PostContainer>
                <Left>
                    <UserPhoto src={ image_url } onClick={onNavigate} alt=''/>
                    <ContentLikes>
                        <LikeHeart idPost = {id} likesInformations={like || {}} updateLikes={updateLikes} />
                    </ContentLikes> 
                    <ContentComments>
                        <CommentChat number = {numberComment} stateComment ={enabledComment} setComments={setEnabledComment}/>
                    </ContentComments>
                    <ContentRePosts>
                        <RePost postId={id} posterId={userId}/>
                    </ContentRePosts>
                </Left>
                <Main>
                    <UserName onClick={onNavigate}> { username } </UserName>
                    {editMessage === true 
                        ? <MessageEditing setMessage={setMessage} message={message} setEditMessage={setEditMessage} 
                            refPostMessage={refPostMessage} token={token} idPost={infos.id} setEnabled={setIsEnabled} 
                            enabled={isEnabled} setPageAndReload={timeLine.setPageAndReload} /> 
                        : <Message reloadPage={reloadPage} setPageAndReload={timeLine.setPageAndReload}>{ text }</Message>
                    }

                    {userId === auth.userId 
                        ? <TrashAndEdit idPost={infos.id} setEditMessage={setEditMessage} editMessage={editMessage} refPostMessage={refPostMessage} setMessage={setMessage} /> 
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
                    
            </PostContainer>
            {enabledComment ? <BoxComments postId={id} numberComment={numberComment} updateComments={updateComments}/> : ''}
        </Container>
    )
}


function MessageEditing({setMessage, message, setEditMessage, refPostMessage, token, idPost, setEnabled, enabled, setPageAndReload}){

    function handleInputChange(e) {
        setMessage( e.target.value );
    }

    function keyPress(event){
        if(window.event.keyCode === 27){
            setEditMessage(false)
            setMessage(refPostMessage.current)  
        } 
        else if(window.event.keyCode === 13){
            const body = { message };
            updatePost(body, token, idPost)
        } 


    }

    async function updatePost(body, token, idPost){
        try {
            setEnabled(false)
            await api.updatePost(body, token, idPost);
            setEnabled(true)
            setPageAndReload(pagesList['timeline']);

        } catch (error) {
            toast.error("Houve um erro ao editar seu post", { theme: "colored" });
            toast();
            setEnabled(true)
        }
    }

    return(
        <Input 
            autoFocus 
            onFocus={function(e) {
                var val = e.target.value;
                e.target.value = '';
                e.target.value = val;
          }} 
            disabled={!enabled} 
            name="text" 
            value={message} 
            onKeyDown={keyPress} 
            onChange={handleInputChange}>
        </Input>
    )
}

function Message({children, setPageAndReload}){

    const navigate = useNavigate();

    function handleHashtagLink(innerText){
            const hashtag = innerText.replace('#','');
            setPageAndReload(pagesList['hashtag']);
            navigate(`/hashtag/${hashtag}`);
    };

    return(
        <UserText>
            <ReactHashtag 
                renderHashtag={(hashtagValue) => {
                    const hashtags = hashtagValue.match(/([#|＃][^(#|＃|(\s))]+)/gi);
                    return hashtags.map(h => <Hashtag  key={h} onClick={(e) => {handleHashtagLink(h)}}>{h}</Hashtag>)
                }
                }>
                {children}
            </ReactHashtag>
        </UserText>
    )
}
export default Post;