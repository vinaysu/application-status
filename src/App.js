import './App.css';
import React, { useEffect } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import UnderOfficer from './UnderOfficer';
import Officer from './Officer';
import HigherOfficer from './HigherOfficer';
import Protected from './Protected';

function App() {
   
   localStorage.setItem('UO',false)
   localStorage.setItem('O',false)
   localStorage.setItem('HO',false)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='UO' element={<UnderOfficer />} />
        <Route path='O' element={<Officer />} />
        <Route path='HO' element={<HigherOfficer />} />
      </Routes>
    </div>
  );
}

export default App;
