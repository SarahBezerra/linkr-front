import { useState } from "react";
import { Reload } from "react-ionicons";
import useInterval from "use-interval";

import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import LoadingCircular from "../LoadingCircular";
import { BoxTag } from "./style";

export default function NewPostsTag({ lastPost }) {
  const [showTag, setShowTag] = useState(false);
  const [newPosts, setnewPosts] = useState(0);
  const { auth } = useAuth();

  useInterval(async () => {
    const isRepost =
      lastPost.repost !== undefined ? { date: lastPost.repost.date } : {};
    const res = await api.getNewPostsWithInterval(
      lastPost?.id,
      isRepost,
      auth.token
    );
    setnewPosts(res.data.count);
    setShowTag(true);
  }, 5000);

  return (
    <>
      {newPosts !== 0 ? (
        showTag ? (
          <BoxTag onClick={() => setShowTag(!showTag)}>
            <div>
              <p>{newPosts} new posts, load more!</p>
              <Reload color={"#FFFFFF"} height="25px" width="25px" rotate />
            </div>
          </BoxTag>
        ) : (
          <LoadingCircular size="40px" />
        )
      ) : (
        ""
      )}
    </>
  );
}
