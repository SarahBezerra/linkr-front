import { Button } from "./style";
import api from "../../services/api.js";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function FollowButton({ id, token, isFollower, setIsFollower }) {

    const [ enabled, setEnabled ] = useState(true);

    async function unfollowOrFollowUser(value){
        setEnabled(false)
        if(value === "follow"){
            try {
                await api.postFollow( id, token );
                setIsFollower(true)
                setEnabled(true)
    
              } catch (error) {
                alert("fail")
                alert("Não foi possível executar a operação")
                setEnabled(true)
                console.log(error)

              }

        }else{
            try {
                await api.deleteFollow( id, token );
                setIsFollower(false)
                setEnabled(true)
    
              } catch (error) {
                alert("Não foi possível executar a operação")
                setEnabled(true)
                console.log(error)
              }
        }
    }

    return(
        isFollower 
        ? 
        <Button 
            className="unfollow"
            disabled={!enabled} 
            enabled={enabled} 
            onClick={() => unfollowOrFollowUser("unfollow")}
        > Unfollow </Button> 
        : 
        <Button 
            disabled={!enabled} 
            enabled={enabled} 
            onClick={() => unfollowOrFollowUser("follow")}
        > Follow </Button>
    )
}

export default FollowButton;