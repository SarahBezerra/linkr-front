import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Timeline from "./pages/Timeline";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import Posts from "./pages/Posts/index";
import Content from "./components/PageLayout/Content";

function App() {
  const [menuSelect, setMenuSelect] = useState(false);

  return (
    <>
      <Content>
        <BrowserRouter>
          <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
          <Routes>
            <Route path={"/timeline"} element={<Timeline />}></Route>
            <Route path={"/sign-up"} element={<SignIn />}></Route>
            <Route path={"/posts"} element={<Posts />}></Route>
          </Routes>
        </BrowserRouter>
      </Content>
    </>
  );
}

export default App;
