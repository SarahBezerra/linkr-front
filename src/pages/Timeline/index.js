import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { SpinnerCircularFixed } from "spinners-react";
import LoadingCircular from "../../components/LoadingCircular";
import InfiniteScroll from 'react-infinite-scroller'
import LoadingAnimation from '../../components/Timeline/index'

import api from "../../services/api";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error, Title } from "./style";
import NewPost from "../../components/newPost";
import HashTags from "../../components/Hashtags";
import useAuth from "../../hooks/useAuth";
import { pagesList, statesList } from "./utils";
import usePage from "../../hooks/usePage";
import FollowButton from "../../components/FollowButton/index";

export default function Timeline({ newPostDisplay }) {
  const [requestState, setRequestState] = useState(statesList["loading"]);
  const [posts, setPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [topHashtags, setTopHashtags] = useState([]);
  const [reload, setReload] = useState(false);
  const [header, setHeader] = useState("");
  const [ isUserProfile, setIsUserProfile ] = useState(false);
  const [ isFollower, setIsFollower ] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadCount, setLoadCount] = useState(0);
  const [keepLoading, setKeepLoading] = useState(true)

  const filter = useParams();
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = useLocation();
  const [page, setPage] = useState(getPage());
  const navigate = useNavigate();

  const { auth } = useAuth();
  const { page: pageName, pageUsername } = usePage();

  useEffect(() => {
    requestPosts();
    getHeader();
    if(pathname === '/timeline'){
      setPage(pagesList['timeline']);
    }
  }, [page, reload, pathname]);

  async function requestPosts() {
    setRequestState(statesList["loading"]);
    const count = loadCount + 1;
    let res = null;

    try {
      if (page === pagesList["timeline"]) {
        res = await api.getPosts(auth.token, count);
      } else if (page === pagesList["hashtag"]) {
        res = await api.getPostsByHashtag(currentParam(), auth.token, count);
      } else if (id) {
        res = await api.getPostsFromUser(id, auth.token, count);

        const userInfos = await api.getFollowers( id , auth.token );
        if(userInfos.data.isUserProfile) setIsUserProfile(true);
        if(userInfos.data.isFollower) setIsFollower(true);
      }

      if(newPosts.length === res.data.length){
        setKeepLoading(false);
      }
      
      setNewPosts(res.data);
      setLoadCount(count);

      const state =
        res.data.length === 0 ? statesList["empty"] : statesList["ok"];
      await requestLikes();
      await requestTopHashtags();
      await requestComments();
      setRequestState(state);
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

  async function requestComments() {
    try {
      const res = await api.getCommentsNumber(auth.token);
      setComments(res.data);
    } catch {
      console.log("Aconteceu um erro ao pegar número de comentários");
    }
  }

  async function requestTopHashtags() {
    try {
      const { data: topHashtags } = await api.getTopHashtags(auth.token);
      setTopHashtags(topHashtags);
    } catch (err) {
      console.log("aconteceu um erro ao buscar os TopHashtags");
      setRequestState(statesList["error"]);
    }
  }

  function getHeader() {
    if (page === pagesList["timeline"]) setHeader("timeline");
    else if (page === pagesList["hashtag"]) setHeader(`#${currentParam()}`);
    // else
    //   setHeader(`${pagecont?.username} posts`);
  }
  function getPage() {
    const name = location.pathname.split("/")[1];
    return pagesList[name];
  }
  function currentParam() {
    return filter[Object.keys(filter)[0]];
  }
  function setPageAndReload(page = undefined) {
    if (page) {
      setPage(page);
    }
    setReload(!reload);
  }

  // async function requestNewPosts(loadCount) {
  //   const count = loadCount + 1;
  //   let res = null;

  //   try {
  //     if (page === pagesList["timeline"]) res = await api.getPosts(auth.token, count);
  //     else if (page === pagesList["hashtag"]) {
  //       res = await api.getPostsByHashtag(currentParam(), auth.token, count);
  //     } else if (id) {
  //       res = await api.getPostsFromUser(id, auth.token, count);
  //       const userInfos = await api.getFollowers( id , auth.token );
  //       if(userInfos.data.isUserProfile) setIsUserProfile(true);
  //       if(userInfos.data.isFollower) setIsFollower(true);
  //     }

      
  //     if(newPosts.length === res.data.length){
  //       setKeepLoading(false);
  //     }
      
  //     setNewPosts(res.data);
  //     setLoadCount(count);

  //     await requestLikes();
  //     await requestTopHashtags();

  //   } catch {
  //     console.log("aconteceu um erro em posts");
  //   }
  // }

  function loadFunc(){
    console.log('oi');
    requestPosts(loadCount);
  }

  const token = auth.token;

  return (
    <Page>
      <Title>
        {header ? (
          header
        ) : pathname === "/timeline" ? (
          "timeline"
        )
        : 

        <>
          <div>
            <img src={pageName.image_url}></img>
            <span>{`
              ${pageName.username}${
                (pageName?.username.slice(-1) === ("s" || "S"))
                ?
                "'"
                :
                "'s"
              } posts`
            }</span> 
          </div>
          {(isUserProfile) ? <></> : <FollowButton id={id} token={token} isFollower={isFollower} setIsFollower={setIsFollower} />}
        </>
        }
      </Title>
      <Container>
      <div style={{display:'flex', flexDirection: 'column', width: '100%'}}>
        <ChooseFeed
          currentPage={getPage}
          posts={posts}
          likes={likes}
          requestLikes={requestLikes}
          state={requestState}
          setPage={setPage}
          imageUrl={auth.image_url}
          setPageAndReload={setPageAndReload}
          setRequestState={setRequestState}
          Display={newPostDisplay}
          pageUsername={pageUsername}
          comments={comments}
          requestComments={requestComments}
        />

           <InfiniteScroll 
            element={Feed}
            initialLoad={true}
            loadMore={loadFunc}
            threshold={50}
            hasMore={keepLoading ? true: false}
            loader={<LoadingAnimation size={50}/>}
          >
          {newPosts.map((p) => (
            <Post
              infos={p}
              key={p.id}
              like={likes.find(({ postId }) => postId === p.id)}
              updateLikes={requestLikes}
              numberComment={comments.find(({ postId }) => postId === p.id)}
              updateComments={requestComments}
              setPage={setPage}
              setPageAndReload={setPageAndReload}
              reloadPage={setRequestState}
              onNavigate={() => {
                const { username, image_url } = p;
                pageUsername({ username, image_url });
                navigate(`/user/${p.userId}`);
              }}
            />
          ))}

            </InfiniteScroll>
          </div>
        <HashTags
          topHashtags={topHashtags}
          setPageAndReload={setPageAndReload}
        ></HashTags>
      </Container>
    </Page>
  );
}

function ChooseFeed({
  currentPage,
  posts,
  likes,
  requestLikes,
  state,
  imageUrl,
  setPage,
  setPageAndReload,
  newPostDisplay,
  pageUsername,
  setRequestState,
  comments,
  requestComments,
  children
}) {
  const navigate = useNavigate();

  if (state === statesList["error"])
    return (
      <Error>
        {" "}
        <p>
          An error occured while trying to fetch the posts, please refresh the
          page
        </p>{" "}
      </Error>
    );
  else if (state === statesList["loading"])
    return (
      <Loading>
        <SpinnerCircularFixed
          size={200}
          thickness={100}
          speed={180}
          color="rgba(57, 89, 172, 1)"
          secondaryColor="rgba(83, 57, 172, 0.24)"
        />
      </Loading>
    );
  else if (state === statesList["empty"])
    return (
      <Feed>
        <NewPost
          setPageAndReload={setPageAndReload}
          imageUrl={imageUrl}
          reloadPage={setRequestState}
          currentPage={currentPage}
        />
        <Empty>
          {" "}
          <p>There are no posts yet</p>{" "}
        </Empty>
      </Feed>
    );
  else
    return (
      <Feed>
        <NewPost
          setPageAndReload={setPageAndReload}
          currentPage={currentPage}
          imageUrl={imageUrl}
          displayCase={newPostDisplay}
        />
        {children}
      </Feed>
    );
}
