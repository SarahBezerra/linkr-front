import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { SpinnerCircularFixed } from "spinners-react";
import api from "../../services/api";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error, Title } from "./style";
import NewPost from "../../components/newPost";
import HashTags from "../../components/Hashtags";
import useAuth from "../../hooks/useAuth";
import usePage from "../../hooks/usePage";

const statesList = {
  loading: 0,
  error: 1,
  empty: 2,
  ok: 3,
};


export default function Timeline({newPostDisplay}) {
  
    const [requestState, setRequestState] = useState(statesList['loading']);
    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [header, setHeader] = useState('')
    const {auth} = useAuth();
    const {page, pageUsername} = usePage();
    const {pathname} = useLocation();
    const {id} = useParams();
    const params = useParams();
    const config = null;

    useEffect(() => {
      requestPosts();
      getHeader();
    
    }, [posts,pathname]);

    async function requestPosts() {
      try {
        if(id){
          const res = await api.getPostsFromUser(id);
          setPosts(res.data);
          const state = res.data.length === 0 ? statesList['empty'] : statesList['ok'];
          setRequestState(state);
        }
        else{
          const res = await api.getPosts();
          setPosts(res.data);
          const state = res.data.length === 0 ? statesList['empty'] : statesList['ok'];
          setRequestState(state);
        }
        await requestLikes();
      } catch {
        console.log("aconteceu um erro em posts");
        setRequestState(statesList['error']);
      }
    }
  

  async function requestLikes() {
    try {
      const res = await api.getLikes(auth.token);
      setLikes(res.data);
    } catch (err) {
      console.log("aconteceu um erro em likes");
      setRequestState(statesList["error"]);
    }
  }

  function getHeader() {
    if (Object.keys(params).length === 0) setHeader("timeline");
    else setHeader(`#${params["hashtag"]}`);
  }

  return (
    <Page>

      <Title>{ pathname === '/timeline' ? 'timeline' : page?.username.slice(-1) === ('s'||'S') ? `${page.username}' posts `: `${page.username}'s posts`}</Title>
      <Container>
        <ChooseFeed
          posts={posts}
          likes={likes}
          requestLikes={requestLikes}
          state={requestState}
          setRequestState={setRequestState}
          imageUrl={auth.image_url}
          newPostDisplay={newPostDisplay}
          pageUsername={pageUsername}
        />
        <HashTags></HashTags>
      </Container>
    </Page>
  );
}


function ChooseFeed({posts, likes, requestLikes, state, imageUrl, newPostDisplay, pageUsername, setRequestState,}){

    const navigate = useNavigate();

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
            <NewPost imageUrl={imageUrl} displayCase={newPostDisplay}/>
            {posts.map((p) => (
              <Post
                infos={p}
                key={p.id}
                like={likes.find(({ postId }) => postId === p.id)}
                updateLikes={requestLikes}
                reloadPage={setRequestState}
                onNavigate={() =>
                  { const {username} = p;
                    pageUsername({username});
                    navigate(`/user/${p.userId}`)}
                }
              />
            ))}
          </Feed>            
        )
}
