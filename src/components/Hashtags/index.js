import { useContext } from "react";
import { useNavigate } from "react-router";
import PageContext from "../../contexts/pageContext";
import { pagesList } from "../../pages/Timeline/utils";
import { Container, Hashtag, Title } from "./style";

export default function HashTags({topHashtags}){



    const navigate = useNavigate();
    const {timeLine} = useContext(PageContext);

    function handleHashtagLink(hashtag){
        timeLine.setPageAndReload(pagesList['hashtag']);
        navigate(`/hashtag/${hashtag}`);
    };
    

    return (
        <Container>
            <Title>trending</Title>
                { topHashtags.map(t => <Hashtag onClick={(e)=>handleHashtagLink(t.text)}> {`# ${t.text}`} </Hashtag>) }
        </Container>
    )
}