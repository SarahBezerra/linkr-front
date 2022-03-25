import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Header from "./components/Header/Header";
import Posts from "./pages/Posts/index";
import SignUp from "./pages/SignUpPage/index";
import SignIn from './pages/SignInPage/index';
import SignIn from "./pages/SignIn";
import Content from "./components/PageLayout/Content";


function App() {
  const [menuSelect, setMenuSelect] = useState(false);
  
  return (
    <Content>
      <BrowserRouter>
        <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
          <Route path='/' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path="/hashtag/:hashtag" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </Content>
  );
}

export default App;
