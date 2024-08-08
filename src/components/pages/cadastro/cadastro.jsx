import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaMapPin, FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './cadastro.module.css';

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

  const [errors, setErrors] = useState({});
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  const validateForm = () => {
    const errors = {};

    // Nome
    if (!formData.nome) errors.nome = 'Nome é obrigatório';

    // Email
    if (!formData.email) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }

    // Senha
    if (!formData.senha) errors.senha = 'Senha é obrigatória';

    // Confirmar Senha
    if (formData.senha !== formData.confirmarSenha) {
      errors.confirmarSenha = 'Senhas não coincidem';
    }

    // Telefone
    if (!formData.telefone) errors.telefone = 'Telefone é obrigatório';

    // Endereço
    if (!formData.endereco) errors.endereco = 'Endereço é obrigatório';

    // Cidade
    if (!formData.cidade) errors.cidade = 'Cidade é obrigatória';

    // Estado
    if (!formData.estado) errors.estado = 'Estado é obrigatório';

    // CEP
    if (!formData.cep) {
      errors.cep = 'CEP é obrigatório';
    } else if (!/^\d{5}-\d{3}$/.test(formData.cep)) {
      errors.cep = 'CEP inválido (formato: 00000-000)';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
    <div className={styles.tudo}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.titulo}>Cadastro</div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaUser className={styles.icon} />
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              {errors.nome && <span className={styles.error}>{errors.nome}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaEnvelope className={styles.icon} />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaLock className={styles.icon} />
              <label htmlFor="senha">Senha:</label>
              <input
                type={showSenha ? 'text' : 'password'}
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <div 
                className={styles.togglePassword} 
                onClick={() => setShowSenha(!showSenha)}
              >
                {showSenha ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.senha && <span className={styles.error}>{errors.senha}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaLock className={styles.icon} />
              <label htmlFor="confirmarSenha">Confirmar Senha:</label>
              <input
                type={showConfirmarSenha ? 'text' : 'password'}
                id="confirmarSenha"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
              <div 
                className={styles.togglePassword} 
                onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
              >
                {showConfirmarSenha ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.confirmarSenha && <span className={styles.error}>{errors.confirmarSenha}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaPhone className={styles.icon} />
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaMapMarkerAlt className={styles.icon} />
              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
              {errors.endereco && <span className={styles.error}>{errors.endereco}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaCity className={styles.icon} />
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
              {errors.cidade && <span className={styles.error}>{errors.cidade}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaMapPin className={styles.icon} />
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              />
              {errors.estado && <span className={styles.error}>{errors.estado}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.inputWithIcon}>
              <FaMapPin className={styles.icon} />
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                required
              />
              {errors.cep && <span className={styles.error}>{errors.cep}</span>}
            </div>
          </div>

          <div className={styles.input}>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
