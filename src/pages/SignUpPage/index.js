import {
  RightBox,
  Container,
  StyledLink,
} from "../../components/SignInAndSignUpLayout/style";
import { SpinnerCircular } from "spinners-react";

import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";

export default function SignUp() {
  const navigate = useNavigate();
  const [isEnabled, setIsEnabled] = useState(true);
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    username: "",
    image_url: "",
  });

  function handleInputChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    setIsEnabled(false);

    api
      .postSignUp(signUpData)
      .then((response) => {
        setIsEnabled(true);
        navigate("/");
      })
      .catch((error) => {
        setIsEnabled(true);
        if (error.response.status === 422) alert("Confira os dados inseridos");
        if (error.response.status === 400) alert("E-mail já casdastrado");
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

      <RightBox>
        <form onSubmit={handleLogin}>
          <fieldset disabled={!isEnabled}>
            <input
              type="email"
              placeholder="e-mail"
              name="email"
              value={signUpData.email}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={signUpData.password}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={signUpData.username}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="text"
              placeholder="picture url"
              name="image_url"
              value={signUpData.image_url}
              onChange={handleInputChange}
              required
            ></input>
            <button type="submit">
              {isEnabled ? (
                "Sign Up"
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
        <StyledLink to="/">Switch back to log in</StyledLink>
      </RightBox>
    </Container>
  );
}
