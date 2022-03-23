import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timeline from './pages/Timeline';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;