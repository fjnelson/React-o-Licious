import React from 'react';
import Navtabs from '../src/components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
  <BrowserRouter>
      <div>
      <Navtabs />
        <Routes>
          <Route path="/" element={<exact />} />
        </Routes>
      </div>
    </BrowserRouter>
      

  );
}

export default App;
