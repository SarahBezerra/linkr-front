import { useEffect, useState } from "react";
// import { ColumnLeft, PageContent, Posts, ContentLikes } from "./style";
// import LikeHeart from "../../components/LikeHeart";
// import api from "../../services";

// export default function Timeline() {
//   const [likes, setLikes] = useState(null);

//   useEffect(() => {
//     requestLikes();
//   }, []);

//   async function requestLikes() {
//     try {
//       const request = await api.getLikes();
//       setLikes(request.data);
//     } catch (err) {
//       console.log("aconteceu um erro");
//     }
//   }
//   console.log(likes);

//   return (
//     <PageContent>
//       {likes
//         ? likes.map((heart) => (
//             <Posts>
//               <ColumnLeft>
//                 <div>Picture</div>
//                 <ContentLikes>
//                   <LikeHeart
//                     likesInformations={heart}
//                     updateLikes={requestLikes}
//                   />
//                 </ContentLikes>
//               </ColumnLeft>
//             </Posts>
//           ))
//         : ""}
//     </PageContent>
//   );
// }
import HashTags from "../../components/Hashtags";
import Post from "../../components/Post";
import api from "../../services/api";
import { Feed, Container, Page, Loading, Empty, Error } from "./style";
import { SpinnerCircularFixed } from "spinners-react";

export default function Timeline() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const config = null;

  useEffect(() => {
    api
      .getPosts(config)
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [isLoading]);

  return (
    <Page>
      <Container>
        <ChooseFeed loading={isLoading} posts={posts} error={error} />
        <HashTags></HashTags>
      </Container>
    </Page>
  );
}

function ChooseFeed({ loading, error, posts }) {
  if (error)
    return (
      <Error>
        {" "}
        <p>
          An error occured while trying to fetch the posts, please refresh the
          page
        </p>{" "}
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
        {" "}
        <p>There are no posts yet</p>{" "}
      </Empty>
    );
  else
    return (
      <Feed>
        {" "}
        {posts.map((p) => (
          <Post infos={p} key={p.id} />
        ))}{" "}
      </Feed>
    );
}
