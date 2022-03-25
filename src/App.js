import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import Hashtag from "./pages/Hashtag";
import Content from "./components/PageLayout/Content";
//import { Container } from './components/Post/style';

function App() {
  const [menuSelect, setMenuSelect] = useState(false);

  return (
    <Content>
      <BrowserRouter>
        <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
        <Routes>
          {/* <Container> */}
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/login" element={<SignIn />}></Route>
          {/* </Container> */}
          <Route path="/sign-up" element={<SignIn />}></Route>
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </BrowserRouter>
    </Content>
  );
}

export default App;
