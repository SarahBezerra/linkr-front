import { useEffect, useState } from "react";
import { ColumnLeft, PageContent, Posts, ContentLikes } from "./style";
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
      {likes
        ? likes.map((heart) => (
            <Posts>
              <ColumnLeft>
                <div>Picture</div>
                <ContentLikes>
                  <LikeHeart
                    likesInformations={heart}
                    updateLikes={requestLikes}
                  />
                </ContentLikes>
              </ColumnLeft>
            </Posts>
          ))
        : ""}
    </PageContent>
  );
}
