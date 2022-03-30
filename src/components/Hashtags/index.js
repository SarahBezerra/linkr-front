import { useNavigate } from "react-router";
import { pagesList } from "../../pages/Timeline/utils";
import { Container, Hashtag, Title } from "./style";

export default function HashTags({ topHashtags, setPageAndReload }) {
  const navigate = useNavigate();

  function handleHashtagLink(hashtag) {
    setPageAndReload(pagesList["hashtag"]);
    navigate(`/hashtag/${hashtag}`);
  }

  return (
    <Container>
      <Title>trending</Title>
      {/* <Top10> */}
      {topHashtags.map((t) => (
        <Hashtag onClick={(e) => handleHashtagLink(t.text)} key={t.text}>
          {`# ${t.text}`}
        </Hashtag>
      ))}
      {/* </Top10> */}
    </Container>
  );
}
