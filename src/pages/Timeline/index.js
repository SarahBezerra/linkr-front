import { useEffect, useState } from "react";
import HashTags from "../../components/Hashtags";
import Post from "../../components/Post";
import api from "../../services/api";
import { Feed, Container, Page, Loading, Empty, Error } from "./style";
import { SpinnerCircularFixed } from 'spinners-react';



const statesList = {
    'loading' : 0,
    'error' : 1,
    'empty': 2,
    'ok': 3,
}

export default function Timeline(){

    const [requestState, setRequestState] = useState(statesList['loading']);
    const [posts, setPosts] = useState([]);
    const config = null;

    useEffect(()=>{
        api.getPosts(config)
        .then((res) => {
            setPosts(res.data);
            const state = res.data.length === 0 ? statesList['empty'] : statesList['ok'];
            setRequestState(state);
        })
        .catch((err) => {
            console.log(err);
            setRequestState(statesList['error']);
        });
    }, [requestState]);

    return (
        <Page>
            <Container>
                <ChooseFeed state={requestState} posts={posts} />
                <HashTags></HashTags>
            </Container>
        </Page>
    )
}


function ChooseFeed({state, posts}){
    if(state === statesList['error'])
        return ( 
            <Error> <p>An error occured while trying to fetch the posts, please refresh the page</p> </Error>  )
    else if(state === statesList['loading'])
        return ( 
            <Loading>
                <SpinnerCircularFixed 
                    size={200} thickness={100} speed={180} 
                    color="rgba(57, 89, 172, 1)" secondaryColor="rgba(83, 57, 172, 0.24)" />
            </Loading> )
    else if(state === statesList['empty'])
        return ( 
            <Empty> <p>There are no posts yet</p> </Empty> )
    else
        return ( 
            <Feed> {posts.map(p => <Post infos={p} key={p.id}/>)} </Feed> )
}