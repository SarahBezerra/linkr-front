import { useEffect, useState } from "react";
import { ColumnLeft, PageContent, Posts, ContentLikes } from "./style";
import { SpinnerRound } from "spinners-react";
import LikeHeart from "../../components/LikeHeart";
import api from "../../services";

export default function Timeline() {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    requestLikes();
  }, []);

  async function requestLikes() {
    try {
      const request = await api.getLikes();
      setLikes(request.data);
    } catch (err) {
      console.log("aconteceu um erro");
    }
  }
  console.log(likes);

  return (
    <PageContent>
      <Posts>
        <ColumnLeft>
          <div>Picture</div>
          <ContentLikes>
            {likes ? (
              likes.map((heart) => <LikeHeart likesInformations={heart} />)
            ) : (
              <SpinnerRound
                size={18}
                thickness={90}
                speed={100}
                color="#FFFF"
              />
            )}
          </ContentLikes>
        </ColumnLeft>
      </Posts>
    </PageContent>
  );
}
