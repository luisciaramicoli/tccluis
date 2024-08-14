import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/usuarios/cli', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usu_email: formData.email,
          usu_senha: formData.senha
        })
      });

      console.log('Status da resposta:', response.status);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('Resposta do servidor:', result);

      if (result.success) {
        console.log('Login efetuado com sucesso:', result);
        navigate('/cadastro'); // Substitua '/cadastro' pelo caminho desejado
      } else {
        setLoginError('Usuário não encontrado ou credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginError('Erro de comunicação com o servidor');
    }
  };

  return (
    <div className='tudo'>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className='Titulo'>Login</div>

          <div className="input">
            <div className="input-with-icon">
              <FaEnvelope className="icon" />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {loginError && <div className="error">{loginError}</div>}

          <div className='input'>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
