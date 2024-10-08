import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './home.module.css';
import { FaBriefcase, FaLightbulb, FaCog } from "react-icons/fa";

function Home() {
  return (
    <div className={styles.fundo}>
      <header className={styles.cabecalho}>
        <img src="/Logo_site.png" alt="Logo" className={styles.logoInicio} />
        <nav>
        <Link to="/contato" className={styles.link}>Contato</Link>
          <Link to="/login" className={styles.link}>Login</Link>
        </nav>
      </header>

      <div className={styles.page1}>
        <img src="/pageee.svg" alt="" className={styles.pageBanner} />
      </div>

      <div className={styles.page2}>
        <div className={styles.tituloPage2}>Quem somos?</div>
        <div className={styles.topicos}>
          <div className={styles.topico1}>
            <div className={styles.circulo}>
              < FaBriefcase className={styles.icone} />
            </div>
            <div className={styles.textoTopico1}>
              Acessibilidade
            </div>
          </div>

          <div className={styles.topico2}>
            <div className={styles.circulo}>
              <FaLightbulb className={styles.icone} />
            </div>
            <div className={styles.textoTopico2}>
              Inovação
            </div>
          </div>

          <div className={styles.topico3}>
            <div className={styles.circulo}>
              <FaCog className={styles.icone} />
            </div>
            <div className={styles.textoTopico3}>
              Tecnologia
            </div>
          </div>
        </div>

        <div className={styles.textos}>
          <p>
            O cadastro de funcionários no SAT é projetado para ser rápido e eficiente, com uma interface intuitiva e campos claros que minimizam erros.
            Isso economiza tempo, melhora a precisão das informações e facilita a gestão e atualização de dados.
            A tecnologia do SAT visa simplificar processos administrativos e aumentar a eficiência do seu negócio.</p>
        </div>

      </div>

      <div className={styles.page3}>
        <div className={styles.tituloPage3}>Cadastro de funcionário</div>
        <div className={styles.cadastroPage3}>
          <div className={styles.cadastroFuncionario}>
            <img src="/cadastro funcionário.png" alt="" className={styles.cadastroFuncionarioImg} />
          </div>
          <div className={styles.textPage3}>
            <p>O cadastro de funcionários no SAT é projetado para ser simples e rápido, garantindo que novos membros da equipe sejam adicionados ao sistema sem demora. O processo simplificado de cadastro economiza tempo, permitindo que você se concentre em outras tarefas importantes. Além disso, a interface intuitiva e os campos claros ajudam a minimizar erros de entrada de dados, garantindo maior precisão nas informações registradas. Com um sistema de cadastro eficiente, a organização e a gestão das informações de clientes e funcionários são melhoradas, facilitando o acesso e a atualização de dados. No STA, acreditamos que a tecnologia deve facilitar a vida das pessoas, e nosso sistema de cadastro é um exemplo de como a inovação pode simplificar processos administrativos e aumentar a eficiência do seu negócio.</p>
          </div>
        </div>
      </div>

      <div className={styles.page4}>
        <div className={styles.tituloPage4}>Objetivo e Missão do SAT</div>
        <div className={styles.textoPage4}>
          <p>O cadastro de funcionários no SAT é rápido e fácil, com uma interface intuitiva que reduz erros e economiza tempo.
            Esse sistema eficiente melhora a organização e gestão de dados, simplificando processos administrativos e aumentando a eficiência do seu negócio.</p>
        </div>
      </div>

      <div className={styles.page5}>
        <div className={styles.tituloPage5}>Pagina inicial</div>
        <div className={styles.paginaPage5}>
         

          <img src="/tela empresa.png" alt="" className={styles.telaEmpresa} />
          <div className={styles.textpage5}>A dashboard do Site Tecnológico Administrativo (SAT) oferece uma visão clara e intuitiva das operações administrativas.
            Com uma interface personalizável e recursos como gráficos dinâmicos e notificações instantâneas, permite que gestores monitorem métricas em tempo
            real, analisem desempenho e tomem decisões rápidas e precisas, otimizando a gestão de recursos tecnológicos.
          </div>
        </div>
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

export default Home;
