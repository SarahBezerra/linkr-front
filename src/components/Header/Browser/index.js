import {BrowserContainer, IconContainer, InputContainer, UsersList, IntegrationContainer, User} from "./style"
import { SearchOutline } from 'react-ionicons'
import { useState } from "react"



export default function Browser(){

    const [browser, setBrowser] = useState('');

    return(
        <IntegrationContainer width={'40%'}>
            <BrowserContainer>
                <UsersList>
                    <User/>
                </UsersList>
                <InputContainer placeholder="Search for people" value={browser} onChange={(e) => {setBrowser(e.target.value)}}/>
                
                
                <IconContainer>
                    <SearchIcon/>
                </IconContainer>

            </BrowserContainer>
        </IntegrationContainer>
        
        
        


    )
}

function SearchIcon(){

    return(
        <SearchOutline
            color={'#000'}   
            height="25px"
            width="25px"

        />
    )
}