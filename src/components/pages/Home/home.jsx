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
        <img src="/RDI (1).png" alt="Descrição da Imagem" className={styles.imagem} />
        <div>
          <div className={styles.titulo}>
            STA
          </div>
          <div className={styles.baixoTitulo}>
            Site Administrativo Tecnológico
          </div>
        </div>
      </div>

      <div className={styles.page2}>
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

      <div className={styles.page3}>
        <div className={styles.textPage3}>
        <p>Cadastro de Funcionários
          O cadastro de funcionários segue a mesma filosofia de simplicidade e rapidez, garantindo que novos membros da equipe sejam adicionados ao sistema sem demora. Alguns dos destaques incluem:

          Campos Personalizáveis: Adapte os campos de cadastro conforme as necessidades da sua empresa, garantindo que todas as informações importantes sejam coletadas.
          Segurança dos Dados: As informações dos funcionários são armazenadas com segurança, seguindo as melhores práticas de proteção de dados.
          Integração com Outros Sistemas: O cadastro de funcionários pode ser integrado com outros sistemas de gestão, facilitando a atualização e a sincronização de informações.
          Vantagens do Nosso Sistema de Cadastro
          Economia de Tempo: O processo simplificado de cadastro reduz o tempo necessário para registrar novos clientes e funcionários, permitindo que você se concentre em outras tarefas importantes.
          Redução de Erros: A interface intuitiva e os campos claros ajudam a minimizar erros de entrada de dados, garantindo maior precisão nas informações registradas.
          Melhoria na Gestão: Com um sistema de cadastro eficiente, você melhora a organização e a gestão das informações de clientes e funcionários, facilitando o acesso e a atualização de dados.
          No STA, acreditamos que a tecnologia deve facilitar a vida das pessoas. Nosso sistema de cadastro é um exemplo de como a inovação pode ser aplicada para simplificar processos administrativos e melhorar a eficiência do seu negócio.</p>
      </div>
      </div>
    </div>
  );
}

export default Home;
