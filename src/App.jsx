import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/pages/login/login';
import Cadastro from './components/pages/cadastro/cadastro';
import Home from './components/pages/Home/home'; // Supondo que você tenha uma página inicial

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </Router>
  );
}

export default App;
