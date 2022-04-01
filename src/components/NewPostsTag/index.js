import { useContext, useState } from "react";
import { Reload } from "react-ionicons";
import useInterval from "use-interval";

import useAuth from "../../hooks/useAuth";
import PageContext from "../../contexts/pageContext";
import api from "../../services/api";
import { BoxTag } from "./style";

export default function NewPostsTag({ lastPost }) {
  const { timeLine } = useContext(PageContext);
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
  }, 15000);

  async function pushNewPosts() {
    setShowTag(!showTag);

    timeLine.setPageAndReload();
  }

  return (
    <>
      {newPosts !== 0 && showTag ? (
        <BoxTag onClick={pushNewPosts}>
          <div>
            <p>{newPosts} new posts, load more!</p>
            <Reload color={"#FFFFFF"} height="25px" width="25px" rotate />
          </div>
        </BoxTag>
      ) : (
        ""
      )}
    </>
  );
}
