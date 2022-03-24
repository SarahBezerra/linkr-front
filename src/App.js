import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import Posts from "./pages/Posts/index";
import Hashtag from "./pages/Hashtag";
import Content from "./components/PageLayout/Content";

function App() {
  const [menuSelect, setMenuSelect] = useState(false);

  return (
    <Content>
      <BrowserRouter>
        <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignIn />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </BrowserRouter>
    </Content>
  );
}

export default App;
