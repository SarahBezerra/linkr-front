import { useContext, useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import api from "../../services/api";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error, Title } from "./style";
import NewPost from "../../components/newPost";
import HashTags from "../../components/Hashtags";
import useAuth from "../../hooks/useAuth";
import { pagesList, statesList } from "./utils";
import usePage from "../../hooks/usePage";
import { useLocation, useNavigate, useParams } from "react-router";
import PageContext from "../../contexts/pageContext";
import FollowButton from "../../components/FollowButton/index";

export default function Timeline({ newPostDisplay }) {
  const { timeLine } = useContext(PageContext);
  const [requestState, setRequestState] = useState(statesList["loading"]);
  //const [page, setPage] = useState(getPage());
  //const [reload, setReload] = useState(false);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [topHashtags, setTopHashtags] = useState([]);
  const [header, setHeader] = useState("");
  const filter = useParams();
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = useLocation();
  const { auth } = useAuth();
  const { pageInfo: pageName, pageUsername } = usePage();
  const [ isUserProfile, setIsUserProfile ] = useState(false);
  const [ isFollower, setIsFollower ] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if( timeLine.page !== timeLine.getPage(location) ) return  timeLine.setPageAndReload(timeLine.getPage(location));
    requestPosts();
    getHeader();
  }, [timeLine.page, timeLine.reload]);

  async function requestPosts() {
    setRequestState(statesList["loading"]);
    let res = null;

    try {
      if (timeLine.page === pagesList["timeline"]) 
        res = await api.getPosts(auth.token);
      else if (timeLine.page === pagesList["hashtag"]) {
        res = await api.getPostsByHashtag(currentParam(), auth.token);
      } else if (id) {
        res = await api.getPostsFromUser(id, auth.token);
        const userInfos = await api.getFollowers( id , auth.token );
        if(userInfos.data.isUserProfile) setIsUserProfile(true);
        if(userInfos.data.isFollower) setIsFollower(true);
      }

      setPosts(res.data);


      const state =
        res.data.length === 0 ? statesList["empty"] : statesList["ok"];
      await requestLikes();
      await timeLine.requestRePosts();
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
    if (timeLine.page === pagesList["timeline"]) setHeader("timeline");
    else if (timeLine.page === pagesList["hashtag"]) setHeader(`#${currentParam()}`);
    // else
    //   setHeader(`${pagecont?.username} posts`);
  }
  function currentParam() {
    return filter[Object.keys(filter)[0]];
  }
  // function getPage() {
  //   const name = location.pathname.split("/")[1];
  //   return pagesList[name];
  // }
  // function setPageAndReload(page = undefined) {
  //   if (page) {
  //     setPage(page);
  //   }
  //   setReload(!reload);
  // }

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
            <img src={pageName.image_url} alt=''></img>
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
        <ChooseFeed
          posts={posts}
          likes={likes}
          requestLikes={requestLikes}
          state={requestState}
          imageUrl={auth.image_url}
          setRequestState={setRequestState}
          Display={newPostDisplay}
          pageUsername={pageUsername}
          comments={comments}
          requestComments={requestComments}
        />
        <HashTags
          topHashtags={topHashtags}
        ></HashTags>
      </Container>
    </Page>
  );
}

function ChooseFeed({
  posts,
  likes,
  requestLikes,
  state,
  imageUrl,
  newPostDisplay,
  pageUsername,
  setRequestState,
  comments,
  requestComments,
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
          imageUrl={imageUrl}
          reloadPage={setRequestState}
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
          imageUrl={imageUrl}
          displayCase={newPostDisplay}
        />
        {posts.map((p) => (
          <Post
            infos={p}
            key={p.id}
            like={likes.find(({ postId }) => postId === p.id)}
            updateLikes={requestLikes}
            numberComment={comments.find(({ postId }) => postId === p.id)}
            updateComments={requestComments}
            reloadPage={setRequestState}
            onNavigate={() => {
              const { username, image_url } = p;
              pageUsername({ username, image_url });
              navigate(`/user/${p.userId}`);
            }}
          />
        ))}
      </Feed>
    );
}