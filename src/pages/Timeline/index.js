import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import api from "../../services/api";
import HashTags from "../../components/Hashtags";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error, Title } from "./style";
import NewPost from "../../components/newPost";


const statesList = {
  'loading' : 0,
  'error' : 1,
  'empty': 2,
  'ok': 3,
}

export default function Timeline() {
    const [requestState, setRequestState] = useState(statesList['loading']);
    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const config = null;

    useEffect(() => {
      requestPosts();
    }, [posts]);

    async function requestPosts() {
      try {
        const res = await api.getPosts(config);
        setPosts(res.data);
        await requestLikes();
        const state = res.data.length === 0 ? statesList['empty'] : statesList['ok'];
        setRequestState(state);
      } catch {
        console.log("aconteceu um erro em posts");
        setRequestState(statesList['error']);
      }
    }

    async function requestLikes() {
      try {
        const res = await api.getLikes();
        setLikes(res.data);
      } catch (err) {
        console.log("aconteceu um erro em likes");
        setRequestState(statesList['error']);
      }
    }

  return (
    <Page>
      <Title>timeline</Title>
      <Container>
        <ChooseFeed
          posts={posts}
          likes={likes}
          requestLikes={requestLikes}
          state={requestState}
        />
        <HashTags></HashTags>
      </Container>
    </Page>
  );
}

function ChooseFeed({posts, likes, requestLikes, state}){
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
          <Feed>
            <NewPost />
            {posts.map((p) => (
              <Post
                infos={p}
                key={p.id}
                like={likes.find(({ postId }) => postId === p.id)}
                updateLikes={requestLikes}
              />
            ))}
          </Feed>            
        )
}