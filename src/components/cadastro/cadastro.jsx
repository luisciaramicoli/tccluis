import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaMapPin } from 'react-icons/fa';
import './cadastro.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para envio dos dados de cadastro para a API
    try {
      const response = await fetch('URL_DA_API_CADASTRO', {
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
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className='Titulo'>Cadastro</div>

        <div className="input">
          <div className="input-with-icon">
            <FaUser className="icon" />
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
        </div>

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

        <div className="input">
          <div className="input-with-icon">
            <FaLock className="icon" />
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input">
          <div className="input-with-icon">
            <FaPhone className="icon" />
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input">
          <div className="input-with-icon">
            <FaMapMarkerAlt className="icon" />
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input">
          <div className="input-with-icon">
            <FaCity className="icon" />
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input">
          <div className="input-with-icon">
            <FaMapPin className="icon" />
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input">
          <div className="input-with-icon">
            <FaMapPin className="icon" />
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='input'>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
