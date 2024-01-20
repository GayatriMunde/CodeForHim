// src/App.js
import React from 'react';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import YesClick from './components/YesClick';
import NoClick from './components/NoClick';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffe3e3, #ffd1d1, #c6e5e5);
  background-size: 200% 200%;
  animation: gradientAnimation 5s infinite;
`;

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage text="Would you like to go on a date with me?" gif="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif"/>}/>
        <Route exact path="/yay" element={<YesClick/>}/>
        <Route exact path="/hmpf" element={<NoClick/>}/>
      </Routes>
    </>
  );
}

export default App;
