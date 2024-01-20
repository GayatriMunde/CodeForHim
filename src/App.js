import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Page1 from './components/Page1';
import Level1 from './components/Level1';
import Stress from './components/Stress';
import NextLevel2 from './components/NextLevel2';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/page1" element={<Page1/>}/>
        <Route exact path="/Stress" element={<Stress/>}/>
        <Route exact path="/Level1" element={<Level1/>}/>
        <Route exact path="/NextLevel2" element={<NextLevel2/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
