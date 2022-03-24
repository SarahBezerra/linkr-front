
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import Posts from "./pages/Posts/index";
import Content from "./components/PageLayout/Content";
import SignUp from "./pages/SignUpPage";

import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [menuSelect, setMenuSelect] = useState(false);
  

  return (
    <>
        <Content>
          <BrowserRouter>
            <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
            <Routes>
              <Route path={'/'} element={<SignIn/>}/>
              <Route path={'/sign-up'} element={<SignUp/>}/>
              <Route path={'/posts'} element={<Posts/>}/>
            </Routes>
          </BrowserRouter>
        </Content>

    </>
  )
}

export default App;
