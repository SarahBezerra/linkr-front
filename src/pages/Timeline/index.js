import { ColumnLeft, PageContent, Posts } from "./style";
import LikeHeart from "./LikeHeart";

export default function Timeline() {
  return (
    <PageContent>
      <Posts>
        <ColumnLeft>
          <div>Picture</div>
          <LikeHeart />
        </ColumnLeft>
      </Posts>
    </PageContent>
  );
}
