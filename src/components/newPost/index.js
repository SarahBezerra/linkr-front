import { PostContainer, PublishContainer, PictureContainer, Header, InputContainer,
  Container, Button } from "./style";
import Img from "../Users/Image";
import { useContext, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import usePage from "../../hooks/usePage";
import PageContext from "../../contexts/pageContext";


export default function NewPost({ imageUrl, displayCase, reloadPage}) {
  const { timeLine, setNewPosts, setLoadCount } = usePage();
  const { auth } = useAuth();
  const { userId } = useParams();
  const location = useLocation();
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const postsItems = [
    { placeholder: "http:/..", type: "text", value: url, state: setUrl },
    {
      placeholder: "Awesome article about #javascript",
      type: "text",
      value: text,
      state: setText,
    },
  ];

  async function RequestLogin(e) {
    e.preventDefault();
    setIsSending(true);

    const token = auth.token;
    const body = { url, text };
    try {
      await api.sendPost(token, body);
      setIsSending(false);
      setNewPosts([]);
      setLoadCount(0);
      timeLine.setPageAndReload();
      setUrl("");
      setText("");
      // reloadPage(0);
      
    } catch (error) {
      toast.error("Houve um erro ao publicar seu link", { theme: "colored" });
      toast();
      setIsSending(false);
    }
  }

  return (
    <Container currentPage={timeLine.getPage(location)}>
      <PostContainer>
        <PictureContainer>
          <Img height={"50px"} src={imageUrl} />
        </PictureContainer>

        <PublishContainer onSubmit={RequestLogin}>
          <Header> What are you going to share today? </Header>

          <Inputs postsItems={postsItems} isSending={isSending} />

          <Button
            opacity={isSending === true ? 0.7 : 1}
            disabled={isSending ? true : false}
          >
            {isSending ? "Publishing..." : "Publish"}
          </Button>
        </PublishContainer>
      </PostContainer>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

function Inputs({ postsItems, isSending }) {
  return (
    <>
      {postsItems.map((item, index) => {
        return (
          <InputContainer
            key={item.type + index}
            as={index === 0 ? "" : "textarea"}
            disabled={isSending ? true : false}
            padding={index === 0 ? "0 15px 0 15px;" : "10px 15px 0 15px;"}
            height={index === 0 ? "30px" : "55px"}
            placeholder={item.placeholder}
            type={item.type}
            value={item.value}
            onChange={(e) => item.state(e.target.value)}
          ></InputContainer>
        );
      })}
    </>
  );
}
