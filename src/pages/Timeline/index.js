import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import api from "../../services/api";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error, Title } from "./style";
import NewPost from "../../components/newPost";
import { useParams } from "react-router-dom";
import HashTags from "../../components/Hashtags";
import useAuth from "../../hooks/useAuth";

const statesList = {
  loading: 0,
  error: 1,
  empty: 2,
  ok: 3,
};

export default function Timeline() {
  const [requestState, setRequestState] = useState(statesList["loading"]);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [header, setHeader] = useState("");
  const params = useParams();
  const { auth } = useAuth();
  const config = null;

  useEffect(() => {
    //setRequestState(statesList['loading']);
    requestPosts();
    getHeader();
  }, []);

  async function requestPosts() {
    let res = null;

    try {
      if (Object.keys(params).length === 0) res = await api.getPosts(config);
      else res = await api.getPostsByHashtag(params["hashtag"]);
      setPosts(res.data);
      const state =
        res.data.length === 0 ? statesList["empty"] : statesList["ok"];
      await requestLikes();
      setRequestState(state);
    } catch {
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

  function getHeader() {
    if (Object.keys(params).length === 0) setHeader("timeline");
    else setHeader(`#${params["hashtag"]}`);
  }

  return (
    <Page>
      <Title> {header} </Title>
      <Container>
        <ChooseFeed
          posts={posts}
          likes={likes}
          requestLikes={requestLikes}
          state={requestState}
          setRequestState={setRequestState}
          imageUrl={auth.image_url}
        />
        <HashTags></HashTags>
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
  setRequestState,
}) {
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
      <Empty>
        {" "}
        <p>There are no posts yet</p>{" "}
      </Empty>
    );
  else
    return (
      <Feed>
        <NewPost imageUrl={imageUrl} />
        {posts.map((p) => (
          <Post
            infos={p}
            key={p.id}
            like={likes.find(({ postId }) => postId === p.id)}
            updateLikes={requestLikes}
            reloadPage={setRequestState}
          />
        ))}
      </Feed>
    );
}
