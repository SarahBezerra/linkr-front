import { PostContainer, PublishContainer, PictureContainer, Header, InputContainer, PageContainer, Button, Title} from "./style"
import Img from "../Users/Image";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import '/home/bongui/Documents/Driven/linkr-front/node_modules/react-toastify/dist/ReactToastify.css'



export default function NewPost(){

    const {userId} = useParams();
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    

    const postsItems = [{ placeholder: 'http:/..', type: 'text', state: setUrl },{ placeholder: 'Awesome article about #javascript', type: 'text', state: setText }];

    async function RequestLogin(e) {


        e.preventDefault();
        setIsSending(true);
        
        const token = '8c9299c3-4ca4-4d0f-ac85-969bd048af7e'
        const body ={url, text}
        try{
            await api.sendPost(token, body);
            setIsSending(false);
            
        }
        catch(error){
            toast("Wow so easy!");
            setIsSending(false);
        }
       
    }

    return(

            <PageContainer>

                <Title>timeline</Title>

                <PostContainer>
                    <PictureContainer>
                        <Img height={'50px'} />
                    </PictureContainer>

                    <PublishContainer onSubmit={RequestLogin}>
                        <Header> What are you going to share today? </Header>

                        <Inputs postsItems={postsItems} isSending={isSending}/>

                        <Button opacity={isSending === true ? 0.7 : 1} disabled={isSending ? true : false}>{isSending ? 'Publishing...' : 'Publish'}</Button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            />
                            {/* Same as */}
                        <ToastContainer />
                    </PublishContainer>

                </PostContainer>
            </PageContainer>

    )
}

function Inputs({postsItems, isSending}){

    return(
       <>
            {postsItems.map((item, index) => {
                return(
                    <InputContainer 
                        as={index === 0? '': 'textarea'} 
                        disabled={isSending ? true : false}
                        padding={index === 0? '0 15px 0 15px;':'10px 15px 0 15px;'} 
                        height={index === 0 ? '30px': '55px'} placeholder={item.placeholder} 
                        type={item.type} 
                        onChange={(e) => item.state(e.target.value)}>
                    </InputContainer>
                )
            })}
       </>
    )

}