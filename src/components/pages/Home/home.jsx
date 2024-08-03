import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './home.module.css';

function Home() {
  return (
   <div className='fundo'>
    <Link to = "/cadastro">Cadastro</Link>
    <Link to = "/login">Login</Link>
   </div>
  );
}

export default Home;
