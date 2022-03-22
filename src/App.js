
import Header from "./components/Header/Header";
import Container from "./components/Container";
import Content from "./components/Content";

import {useState} from 'react'

function App() {

  const [menuSelect, setMenuSelect] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <Header menuSelect={menuSelect} setMenuSelect={setMenuSelect}/>
        </Content>
      </Container>
    </>
  )
}

export default App;
