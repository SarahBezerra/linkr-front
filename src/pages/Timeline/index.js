import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { SpinnerCircularFixed } from "spinners-react";
import api from "../../services/api";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error, Title } from "./style";
import NewPost from "../../components/newPost";
import HashTags from "../../components/Hashtags";
import useAuth from "../../hooks/useAuth";
import { pagesList, statesList } from "./utils";
import usePage from "../../hooks/usePage";


export default function Timeline({ newPostDisplay }) {
    const [requestState, setRequestState] = useState(statesList['loading']);
    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [topHashtags, setTopHashtags] = useState([]);
    const [reload, setReload] = useState(false);
    const [header, setHeader] = useState('');
    const filter = useParams();
    const { id } = useParams();
    const location = useLocation();
    const { pathname } = useLocation();
    const [page, setPage] = useState(getPage());
    const { auth } = useAuth();
    const { page: pageName, pageUsername } = usePage();
    

    useEffect(() => {
      requestPosts();
      getHeader();
    }, [page, reload]);
  

    async function requestPosts() {

      setRequestState(statesList['loading']);
      let res = null;

      try {
        console.log(pagesList);
        if(page === pagesList['timeline'])
          res = await api.getPosts(auth.token);
        else if(page === pagesList['hashtag']) {
          res = await api.getPostsByHashtag(currentParam(), auth.token);
        } else if (id) {
          res = await api.getPostsFromUser(id, auth.token);
        }

        setPosts(res.data);

        const state = (res.data.length === 0) ? statesList['empty'] : statesList['ok'];
        setRequestState(state);

        await requestTopHashtags();
        await requestLikes();
    } catch {
      console.log("aconteceu um erro em posts");
      setRequestState(statesList["error"]);
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

    async function requestTopHashtags() {
      try {
        const {data: topHashtags} = await api.getTopHashtags(auth.token);
        setTopHashtags(topHashtags);
        console.log(topHashtags);
      } catch (err) {
        console.log("aconteceu um erro ao buscar os TopHashtags");
        setRequestState(statesList['error']);
      }
    }

    function getHeader(){
      if(page === pagesList['timeline'])
        setHeader('timeline')
      else if (page === pagesList['hashtag'])  
        setHeader(`#${currentParam()}`);
      // else
      //   setHeader(`${pagecont?.username} posts`);
    }
    function getPage(){
        const name = location.pathname.split('/')[1];
        return pagesList[name];
    }
    function currentParam(){
      return filter[Object.keys(filter)[0]]
    }
    function setPageAndReload(page = undefined){
      if(page){
        setPage(page);
      }
      setReload(!reload);
    }


  return (
    <Page>
      <Title>
        {header ? header : pathname === '/timeline' ? 'timeline' : pageName?.username.slice(-1) === ('s'||'S') ? `${pageName.username}' posts `: `${pageName.username}'s posts`}
      </Title>
      <Container>
        <ChooseFeed
          currentPage={getPage}
          posts={posts}
          likes={likes}
          requestLikes={requestLikes}
          state={requestState}
          setPage = {setPage}
          imageUrl={auth.image_url}
          setPageAndReload={setPageAndReload}
          setRequestState={setRequestState}
          Display={newPostDisplay}
          pageUsername={pageUsername}
        />
        <HashTags topHashtags={topHashtags} setPageAndReload={setPageAndReload}></HashTags>
      </Container>
    </Page>
  );
}

function ChooseFeed({posts, likes, requestLikes, state, imageUrl, setPageAndReload, currentPage, newPostDisplay, pageUsername, setRequestState}){
  
    const navigate = useNavigate();
  
    if(state === statesList['error'])
        return ( 
            <Error> {" "} <p>An error occured while trying to fetch the posts, please refresh the page</p> {" "} </Error>  )
    else if(state === statesList['loading'])
        return ( 
            <Loading>
                <SpinnerCircularFixed 
                    size={200} thickness={100} speed={180} 
                    color="rgba(57, 89, 172, 1)" secondaryColor="rgba(83, 57, 172, 0.24)" />
            </Loading> )
    else if(state === statesList['empty'])
        return (
          <>
            <NewPost setPageAndReload={setPageAndReload} imageUrl={imageUrl} reloadPage={setRequestState} currentPage={currentPage} />
            <Empty>
              {" "}
              <p>There are no posts yet</p>{" "}
            </Empty>
          </>
    );
    else
        return ( 
          <Feed>
            <NewPost  setPageAndReload={setPageAndReload} currentPage={currentPage} imageUrl={imageUrl} displayCase={newPostDisplay}/>
            {posts.map((p) => (
              <Post
                infos={p}
                key={p.id}
                like={likes.find(({ postId }) => postId === p.id)}
                updateLikes={requestLikes}
                setPageAndReload={setPageAndReload}
                reloadPage={setRequestState}
                onNavigate={() => {
                  const { username } = p;
                  pageUsername({ username });
                  navigate(`/user/${p.userId}`);
                }}
              />
            ))}
          </Feed>            
        )
}