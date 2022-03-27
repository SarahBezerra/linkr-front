import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUpPage";
import SignIn from "./pages/SignIn";
import Content from "./components/PageLayout/Content";
import UserPage from "./pages/userPage";
import { AuthProvider } from "./contexts/authContext";
import { PageProvider } from "./contexts/pageContext";
import { Hashtag } from "./components/Post/style";
//import { Container } from './components/Post/style';

function App() {
  const [menuSelect, setMenuSelect] = useState(false);

  return (
    <Content>
      <AuthProvider>
        <PageProvider>
          <BrowserRouter>
            <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/user/:id" element={<UserPage />} />
              <Route path="/hashtag/:hashtag" element={<Hashtag />} />
            </Routes>
          </BrowserRouter>
        </PageProvider>
      </AuthProvider>
    </Content>
  );
}

export default App;
