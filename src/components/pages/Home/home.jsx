import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './home.module.css';
import { FaBriefcase } from "react-icons/fa";

function Home() {
  return (
    <div className={styles.fundo}>
      <header className={styles.cabecalho}>
        <Link to="/cadastro" className={styles.link}>Cadastro</Link>
        <Link to="/login" className={styles.link}>Login</Link>
      </header>

      <div className={styles.page1}>
      <img src="/RDI (1).png" alt="Descrição da Imagem" className={styles.imagem}/>
      <div>
        <div className={styles.titulo}>
          STA
        </div>
        <div className={styles.baixoTitulo}>
          Site Administrativo Tecnológico
        </div>
        </div>
      </div>

      <div className={styles.topicos}>
        <div className={styles.topico1}>
          <div className={styles.circulo}>
            <FaBriefcase className={styles.icone} />
          </div>
          <div className={styles.textoTopico1}>
            Acessibilidade
          </div>
        </div>

        <div className={styles.topico2}>
          <div className={styles.circulo}>
            <FaBriefcase className={styles.icone} />
          </div>
          <div className={styles.textoTopico2}>
            Inovação
          </div>
        </div>

        <div className={styles.topico3}>
          <div className={styles.circulo}>
            <FaBriefcase className={styles.icone} />
          </div>
          <div className={styles.textoTopico3}>
            Tecnologia
          </div>
        </div>
      </div>

      <div className={styles.textos}>
          <p>O STA - Site Administrativo Tecnológico é uma plataforma inovadora projetada para facilitar
             a gestão e o acesso a recursos tecnológicos em ambientes administrativos. Nossa missão é 
             oferecer ferramentas intuitivas e acessíveis para promover a eficiência,
              a acessibilidade e a inovação no trabalho diário de administradores e gestores.</p>
        </div>
        <div>
          <img src="/RDI (1).gif" alt="" className={styles.video} />
        </div>

    </div>
  );
}

export default Home;
