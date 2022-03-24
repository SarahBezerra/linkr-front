import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";

import api from "../../services/api";
import HashTags from "../../components/Hashtags";
import Post from "../../components/Post";
import { Feed, Container, Page, Loading, Empty, Error } from "./style";

export default function Timeline() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const config = null;

  useEffect(() => {
    requestPosts();
  }, []);

  async function requestPosts() {
    try {
      const res = await api.getPosts(config);
      setPosts(res.data);
      await requestLikes();
      setIsLoading(false);
    } catch {
      console.log("aconteceu um erro em posts");
      setError(true);
    }
  }

  async function requestLikes() {
    try {
      const res = await api.getLikes();
      console.log(res.data);
      setLikes(res.data);
    } catch (err) {
      console.log("aconteceu um erro em likes");
      setError(true);
    }
  }
  console.log(likes);

  return (
    <Page>
      <Container>
        <ChooseFeed
          loading={isLoading}
          posts={posts}
          error={error}
          likes={likes}
          requestLikes={requestLikes}
        />
        <HashTags></HashTags>
      </Container>
    </Page>
  );
}

function ChooseFeed({ loading, error, posts, likes, requestLikes }) {
  if (error)
    return (
      <Error>
        <p>
          An error occured while trying to fetch the posts, please refresh the
          page
        </p>
      </Error>
    );
  else if (loading)
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
  else if (posts.length === 0)
    return (
      <Empty>
        <p>There are no posts yet</p>
      </Empty>
    );
  else
    return (
      <Feed>
        {posts.map((p) => (
          <Post
            infos={p}
            key={p.id}
            like={likes[p.id - 1]}
            updateLikes={requestLikes}
          />
        ))}
      </Feed>
    );
}
