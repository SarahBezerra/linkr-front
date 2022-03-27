import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import api from "../../services/api";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error, Title } from "./style";
import NewPost from "../../components/newPost";
import { useParams, useLocation } from "react-router-dom";
import HashTags from "../../components/Hashtags";
import useAuth from "../../hooks/useAuth";
import { pagesList, statesList } from "./utils";


export default function Timeline() {
    const [requestState, setRequestState] = useState(statesList['loading']);
    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [topHashtags, setTopHashtags] = useState([]);
    const [reload, setReload] = useState(false);
    const [header, setHeader] = useState('');
    const filter = useParams();
    const location = useLocation();
    const [page, setPage] = useState(getPage());
    const { auth } = useAuth();

    console.log(page);

    useEffect(() => {
      requestPosts();
      console.log('entrei no effect');
      getHeader();
    }, [page, reload]);

    async function requestPosts() {

      setRequestState(statesList['loading']);
      let res = null;

      try {
        if(page === pagesList['timeline'])
          res = await api.getPosts(auth.token);
        else if(page === pagesList['hashtag']) {
          console.log(filter);
          res = await api.getPostsByHashtag(currentParam(), auth.token);
        }

        setPosts(res.data);

        const state = (res.data.length === 0) ? statesList['empty'] : statesList['ok'];
        setRequestState(state);

        await requestTopHashtags();
        //await requestLikes();
      } catch {
        setRequestState(statesList['error']);
      }
    }

    async function requestLikes() {
      try {
        const res = await api.getLikes();
        setLikes(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("aconteceu um erro em likes");
        setRequestState(statesList['error']);
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
    }

    function getPage(){
        const name = location.pathname.split('/')[1];
        return pagesList[name];
    }
    function currentParam(){
      return filter[Object.keys(filter)[0]]
    }
    function setPageAndReload(page){
      setPage(page);
      setReload(!reload);
    }

  return (
    <Page>
      <Title> {header} </Title>
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
        />
        <HashTags topHashtags={topHashtags} setPageAndReload={setPageAndReload}></HashTags>
      </Container>
    </Page>
  );
}

function ChooseFeed({posts, likes, requestLikes, state, imageUrl, setPageAndReload, currentPage}){
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
            <NewPost  currentPage={currentPage} imageUrl={imageUrl}/>
            {posts.map((p) => (
              <Post
                infos={p}
                key={p.id}
                like={likes.find(({ postId }) => postId === p.id)}
                updateLikes={requestLikes}
                setPageAndReload={setPageAndReload}
              />
            ))}
          </Feed>            
        )
}