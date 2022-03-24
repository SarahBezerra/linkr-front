
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home/index";
import Content from "./components/PageLayout/Content";

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
              <Route path={'/home'} element={<Home/>}></Route>
            </Routes>
          </BrowserRouter>
        </Content>

    </>
  )
}

export default App;
