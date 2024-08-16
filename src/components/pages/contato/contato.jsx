import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './contato.module.css';

function Contato() {
  return (
    <div className={styles.fundo}>
      <header className={styles.cabecalho}>
        <img src="/Logo_site.png" alt="Logo" className={styles.logoInicio} />
        <nav>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/login" className={styles.link}>Login</Link>
        </nav>
      </header>

      <div className={styles.pageContato}>
        <h1 className={styles.tituloContato}>Entre em Contato</h1>
        
        <div className={styles.infoContato}>
          <div>
            <FaEnvelope className={styles.email} />
            <span>Email: contato@exemplo.com</span>
          </div>
          <div>
            <FaPhone className={styles.telefone} />
            <span>Telefone: (11) 1234-5678</span>
          </div>
          <div>
            <FaWhatsapp className={styles.wat}/>
            <span>WhatsApp: (11) 98765-4321</span>
          </div>
          <div>
            <FaMapMarkerAlt className={styles.endereco}/>
            <span>Endereço: Rua Exemplo, 123, São Paulo, SP</span>
          </div>
        </div>

        <form className={styles.formularioContato}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>

          <button type="submit" className={styles.botaoEnviar}>Enviar</button>
        </form>
      </div>

      <footer className={styles.rodape}>
        <div className={styles.logoDiv}>
          <img src="/Logo_site.png" alt="Logo" className={styles.logo} />
        </div>
        
        <div className={styles.redesSociais}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className={styles.criadores}>
          Criado por: <span>Reynaldo</span>, <span>Pedro</span>, <span>Vynicius</span>, <span>Luis</span>
        </div>

        <div className={styles.direitosReservados}>
          © 2024 Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default Contato;
