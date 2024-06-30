import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './home.module.css';
import { FaBriefcase } from "react-icons/fa";

function Home() {
  return (
    <div className={styles.fundo}>
      <header className={styles.cabecalho}>
        <Link to="/cadastro"><div className={styles.link}>Cadastro</div></Link>
        <Link to="/login"> <div className={styles.link}>Login</div></Link>
      </header>

      <div className={styles.page1}>
        <div className={styles.titulo}>
          SAT
        </div>
        <div className={styles.baixoTitulo}>
          Site Administrativo Tecnológico
        </div>
      </div>

      <div className={styles.topicos}>
        <div className={styles.topico1}>
          <div className={styles.circulo}>
            <i className={styles.icone}><FaBriefcase /></i>
          </div>

        </div>


        <div className={styles.topico2}>
          <div className={styles.circulo}>
            <i className={styles.icone}><FaBriefcase /></i>
          </div>

        </div>

        <div className={styles.topico3}>
          <div className={styles.circulo}>
            <i className={styles.icone}><FaBriefcase /></i>
          </div>

        </div>
      </div>

      <div className={styles.textos}>
        <div className={styles.textoTopico1}>
          Texto abaixo do terceiro cskkkkkkkkkkkkkkkkk
        </div>
        <div className={styles.textoTopico2}>
          Texto abaixo do terceiro círculoscsdcsd
        </div>
        <div className={styles.textoTopico3}>
          Texto abaixo do terceiro círculoscsdcsdsds
        </div>
      </div>

    </div>
  );
}

export default Home;
