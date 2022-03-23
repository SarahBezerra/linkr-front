import React from 'react';
import { useLocation ,BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from './pages/Timeline';



import Header from "./components/Header/Header";
import Container from "./components/PageLayout/Container";
import Content from "./components/PageLayout/Content";
import SignIn from "./pages/SignIn";

import {useState} from 'react'


function App() {

  const [menuSelect, setMenuSelect] = useState(false);
  const [headerDisplay, setHeaderDisplay] = useState(true);

  return (
      <Container>
        <Content>
          <BrowserRouter>
            <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
            <Routes>
              <Route path='/' element={<Timeline />} />
              <Route path='/login' element={<SignIn/>}></Route>
            </Routes>
          </BrowserRouter>
        </Content>
      </Container>
  )
}

export default App;