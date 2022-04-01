import { useContext, useState } from "react";
import { SpinnerInfinity } from "spinners-react";
import AuthContext from "../../contexts/authContext";
import PageContext from "../../contexts/pageContext";
import api from "../../services/api";
import { BoxRePost, IconRePost, IconRePostMarked } from "./style";

export default function RePost({ postId, posterId }) {

  const { rePosts, setPageAndReload } = useContext(PageContext);
  const repost = (rePosts) ? rePosts.find(r =>r.id === postId) : undefined;
  const [wait, setWait] = useState(false);
  const { auth } = useContext(AuthContext);
  
  
  async function rePostOrNot() {
    setWait(true);

    try {
      await api.toggleRePost(postId, auth.token);
      setPageAndReload();

    } catch {
      console.log("ocorreu um erro ao dar rePost");
    }
  }

  return (
          <BoxRePost show={posterId !== auth.userId} onClick={rePostOrNot}>
            {repost?.IReposted 
              ? <IconRePostMarked />
              : <IconRePost />
            }
            {wait
              ? <SpinnerInfinity size={15} thickness={100} speed={180} color="#AC0000" secondaryColor="#FFFFFF" />
              : <p> {repost?.countRePosts || 0} {repost?.countRePosts > 1 ? " re-posts" : " re-post"} </p>
            }
          </BoxRePost>
  )
}