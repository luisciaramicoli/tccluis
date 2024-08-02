import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from './components/cadastro/cadastro';
import Login from './components/login/login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <Link to="/login">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
