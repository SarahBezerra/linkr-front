import { RightBox, Container, StyledLink } from "../../components/SignInAndSignUpLayout/style"
import { SpinnerCircular } from 'spinners-react';

import React, { useState } from "react"
import { useNavigate } from "react-router"
import api from "../../services/api";

export default function SignIn(){

    const navigate = useNavigate();
    const [isEnabled, setIsEnabled] = useState(true);
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });
    
    function handleInputChange(e){
        setSignInData({...signInData, [e.target.name]: e.target.value})
    }
    
    function handleLogin(e){
        e.preventDefault();
        setIsEnabled(false);

        api.postSignIn(signInData)
        .then((res) => {
            setIsEnabled(true)
            console.log(res.data)
            navigate("/timeline")
        })
        .catch((err) => {
            setIsEnabled(true)
            console.log(err.res.data);
        });
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
                        <input type="email" placeholder="e-mail" name="email" value={signInData.email} onChange={handleInputChange} required></input>
                        <input type="password" placeholder="password" name="password" value={signInData.password} onChange={handleInputChange} required></input>
                        <button type="submit">{isEnabled ? "Sign Up" : <SpinnerCircular size={50} thickness={100} speed={100} color="#1877F2" secondaryColor="#fff" />}</button>
                    </fieldset>
                </form>
                <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
            </RightBox>
        </Container>
    )
}