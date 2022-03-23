
import Header from "./components/Header/Header";
import Container from "./components/Container";
import Content from "./components/Content";
import SignIn from "./pages/SignIn";

import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [menuSelect, setMenuSelect] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <BrowserRouter>
            <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>

            <Routes>
              <Route path={'/sign-up'} element={<SignIn/>}></Route>
            </Routes>
          </BrowserRouter>
        </Content>
      </Container>
    </>
  )
}

export default App;
