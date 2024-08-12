import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    cpf: '',
    senha: ''
  });

  const [cpfError, setCpfError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'cpf') {
      if (validarCPF(value)) {
        setCpfError('');
      } else {
        setCpfError('CPF inválido');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarCPF(formData.cpf)) {
      setCpfError('CPF inválido');
      return;
    }

    // Lógica para envio dos dados de login para a API
    try {
      const response = await fetch('URL_DA_API_LOGIN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
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
            <FaUser className="icon" />
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            {cpfError && <div className="error">{cpfError}</div>}
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

        <div className='input'>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
