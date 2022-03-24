import React from 'react';
import {useState} from 'react'
import { useLocation ,BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './pages/Timeline';
import Header from "./components/Header/Header";
import Content from "./components/PageLayout/Content";
import SignIn from "./pages/SignIn";
import Posts from "./pages/Posts/index";
import SignUp from "./pages/SignUpPage";


function App() {

  const [menuSelect, setMenuSelect] = useState(false);
  
  return (
        <Content>
          <BrowserRouter>
            <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
            <Routes>
              <Route path='/timeline' element={<Timeline/>} />
              <Route path='/' element={<SignIn/>} />
              <Route path='/sign-up' element={<SignUp/>} />
              <Route path='/posts' element={<Posts/>} />
            </Routes>
          </BrowserRouter>
        </Content>
  )
}

export default App;