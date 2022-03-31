import { BoxTag } from "./style";
import { Reload } from "react-ionicons";

export default function NewPostsTag() {
  return (
    <BoxTag>
      <div>
        <p>12 new posts, load more!</p>
        <Reload color={"#FFFFFF"} height="25px" width="25px" rotate />
      </div>
    </BoxTag>
  );
}
