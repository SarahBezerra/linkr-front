import { RightBox, Container, StyledLink } from "./style"
import { SpinnerCircular } from 'spinners-react';

import React, { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

export default function SignUp(){

    const navigate = useNavigate();
    const [isEnabled, setIsEnabled] = useState(true);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        username: "",
        picture_url: ""
    });
    
    function handleInputChange(e){
    setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    function setAndPersistToken(token) {
		localStorage.setItem("token", token);
	}
    
    function handleLogin(e){
        e.preventDefault();
        setIsEnabled(false);
        console.log(loginData)
        //const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, loginData);
        
        promise.then(response => {
            setIsEnabled(true)
            setAndPersistToken(response.data)
            navigate("/")
        })
        promise.catch(error => {
            setIsEnabled(true)
            console.log(error.response.data)
        })
    }

    return(
        <Container>
            <div className="left-box">
                <h1>linkr</h1>
                <p>save, share and discover<br/>the best links on the web</p>
            </div>
            
            <RightBox>
                <form onSubmit={handleLogin}>
                    <fieldset disabled={!isEnabled}>
                        <input type="email" placeholder="e-mail" name="email" value={loginData.email} onChange={handleInputChange} required></input>
                        <input type="password" placeholder="password" name="password" value={loginData.password} onChange={handleInputChange} required></input>
                        <input type="text" placeholder="username" name="username" value={loginData.username} onChange={handleInputChange} required></input>
                        <input type="text" placeholder="picture url" name="picture_url" value={loginData.picture_url} onChange={handleInputChange} required></input>
                        <button type="submit">{isEnabled ? "Sign Up" : <SpinnerCircular size={50} thickness={100} speed={100} color="#1877F2" secondaryColor="#fff" />}</button>
                    </fieldset>
                </form>
                <StyledLink to="/">Switch back to log in</StyledLink>
            </RightBox>
        </Container>
    )
}