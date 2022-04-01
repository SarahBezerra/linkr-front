import {
  RightBox,
  Container,
  StyledLink,
} from "../../components/SignInAndSignUpLayout/style";
import { SpinnerCircular } from "spinners-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import usePage from "../../hooks/usePage";
import { pagesList } from "../Timeline/utils";

export default function SignIn() {
  const { auth, login } = useAuth();
  const navigate = useNavigate();
  const [isEnabled, setIsEnabled] = useState(true);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    if(auth)
      navigate('/timeline');
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    setIsEnabled(false);

    api
      .postSignIn(signInData)
      .then((response) => {
        setIsEnabled(true);
        login(response.data);
        navigate("/timeline");
      })
      .catch((error) => {
        setIsEnabled(true);
        if (error.response.status === 400) alert("E-mail ou senha incorretos");
      });
  }

  return (
    <Container>
      <div className="left-box">
        <h1>linkr</h1>
        <p>
          save, share and discover
          <br />
          the best links on the web
        </p>
      </div>

      <RightBox isEnabled={isEnabled}>
        <form onSubmit={handleLogin}>
          <fieldset disabled={!isEnabled}>
            <input
              type="email"
              placeholder="e-mail"
              name="email"
              value={signInData.email}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={signInData.password}
              onChange={handleInputChange}
              required
            ></input>
            <button type="submit">
              {isEnabled ? (
                "Log In"
              ) : (
                <SpinnerCircular
                  size={50}
                  thickness={100}
                  speed={100}
                  color="#1877F2"
                  secondaryColor="#fff"
                />
              )}
            </button>
          </fieldset>
        </form>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </RightBox>
    </Container>
  );
}
