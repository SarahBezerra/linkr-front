import React from 'react';
import {useState} from 'react'
import { useLocation ,BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './pages/Timeline';
import Header from "./components/Header/Header";
import Content from "./components/PageLayout/Content";
import SignIn from "./pages/SignIn";
import NewPost from "./components/newPost/index";
import Hashtag from './pages/Hashtag';


function App() {

  const [menuSelect, setMenuSelect] = useState(false);
  

  return (
        <Content>
          <BrowserRouter>
            <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
            <Routes>
              <Route path='/timeline' element={<Timeline />} />
              <Route path='/login' element={<SignIn/>}></Route>
              <Route path='/sign-up' element={<SignIn/>}></Route>
              <Route path='/hashtag/:hashtag' element={<Hashtag/>}/>
            </Routes>
          </BrowserRouter>
        </Content>
  )
}

export default App;