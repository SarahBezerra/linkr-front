import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUpPage/index";
import SignIn from "./pages/SignInPage/index";
import Hashtag from "./pages/Hashtag";
import Content from "./components/PageLayout/Content";
//import { Container } from './components/Post/style';

function App() {
  const [menuSelect, setMenuSelect] = useState(false);

  return (
    <BrowserRouter>
      <Content>
        <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
