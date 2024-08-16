import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import './login.css';

function Login() {
  const [usu_email, setUsu_email] = useState('');
  const [usu_senha, setUsu_senha] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/loginUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usu_email,
          usu_senha,
        }),
      });

      console.log('Status da resposta:', response.status);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('Resposta do servidor:', result);

      if (result.sucesso) {
        console.log('Login efetuado com sucesso:', result);
        navigate('/home'); // Substitua '/cadastro' pelo caminho desejado
      } else {
        setLoginError('Usuário não encontrado ou credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginError('Erro de comunicação com o servidor');
    }
  };

  return (
    <div className="tudo">
      <header className="cabecalho">
        <img src="/Logo_site.png" alt="Logo" className="logoInicio" />
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/contato" className="link">Contato</Link>
        </nav>
      </header>

      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="Titulo">Login</div>

          <div className="input">
            <div className="input-with-icon">
              <FaEnvelope className="icon" />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={usu_email}
                onChange={(e) => setUsu_email(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input">
            <div className="input-with-icon">
              <FaLock className="icon" />
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={usu_senha}
                onChange={(e) => setUsu_senha(e.target.value)}
                required
              />
            </div>
          </div>

          {loginError && <div className="error">{loginError}</div>}

          <div className="input">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
