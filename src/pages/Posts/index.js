import { PostContainer, PublishContainer, PictureContainer, Header, InputContainer} from "./style"
import { useState } from "react";

export default function Posts(){

    const [url, setUrl] = useState('');
    const [message, setMessage] = useState('');

    const postsItems = [{ placeholder: 'http:/..', type: 'text', state: setUrl },{ placeholder: 'Awesome article about #javascript', type: 'text', state: setMessage }];


    return(
        <PostContainer>
            <PictureContainer/>
            <PublishContainer>
                <Header> What are you going to share today? </Header>
                {postsItems.map((item, index) => {
                    return(<InputContainer height={index === 0 ? '30px': '65px'} placeholder={item.placeholder} type={item.type} onChange={(e) => item.state(e.target.value)}></InputContainer>
                    )
                })}

            </PublishContainer>

        </PostContainer>
    )
}