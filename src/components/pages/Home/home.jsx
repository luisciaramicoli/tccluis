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
        <img src="/pageee.svg" alt="" className={styles.pageBanner} />
      </div>

      <div className={styles.page2}>
      <div className={styles.tituloPage2}>Quem somos?</div>
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

      </div>

      <div className={styles.page3}>
      <div className={styles.tituloPage3}>Cadastro de funcionário</div>
      <div className={styles.cadastroPage3}>
        <div className={styles.cadastroFuncionario}>
          <img src="/cadastro funcionário.png" alt="" className={styles.cadastroFuncionarioImg} />
        </div>
        <div className={styles.textPage3}>
          <p>O cadastro de funcionários no STA é projetado para ser simples e rápido, garantindo que novos membros da equipe sejam adicionados ao sistema sem demora. O processo simplificado de cadastro economiza tempo, permitindo que você se concentre em outras tarefas importantes. Além disso, a interface intuitiva e os campos claros ajudam a minimizar erros de entrada de dados, garantindo maior precisão nas informações registradas. Com um sistema de cadastro eficiente, a organização e a gestão das informações de clientes e funcionários são melhoradas, facilitando o acesso e a atualização de dados. No STA, acreditamos que a tecnologia deve facilitar a vida das pessoas, e nosso sistema de cadastro é um exemplo de como a inovação pode simplificar processos administrativos e aumentar a eficiência do seu negócio.</p>
        </div>
        </div>
      </div>

      <div className={styles.page4}>
        <div className={styles.tituloPage4}>Objetivo e Missão do STA</div>
        <div className={styles.textoPage4}>
          <p>O Site Tecnológico Administrativo (STA) tem como objetivo principal otimizar a gestão e o acesso a recursos tecnológicos em ambientes administrativos.
             Nossa missão é fornecer uma plataforma inovadora e intuitiva que facilite a administração de processos, promova a eficiência e estimule a inovação. 
             Buscamos transformar a maneira como administradores e gestores interagem com suas ferramentas, oferecendo soluções que simplificam tarefas complexas,
              melhoram a organização e garantem um fluxo de trabalho mais ágil e eficaz. No STA, acreditamos que a tecnologia deve ser um aliado no aprimoramento contínuo
               das operações administrativas.</p>
        </div>
      </div>

      <div className={styles.page5}>
        <div className={styles.tituloPage5}>Pagina inicial</div>
        <div className={styles.paginaPage5}>
        <div className={styles.textpage5}>A dashboard do Site Tecnológico Administrativo (STA) é uma ferramenta central projetada para oferecer uma visão abrangente e intuitiva das operações administrativas.
           Com uma interface amigável e personalizável, a dashboard permite que gestores acompanhem métricas chave em tempo real, analisem dados de desempenho,
            e tomem decisões informadas com rapidez e precisão. Recursos como gráficos dinâmicos, notificações instantâneas e acesso facilitado a relatórios detalhados 
            garantem que todas as informações importantes estejam sempre à disposição. A inovação e a eficiência são o foco principal, proporcionando aos administradores
             uma plataforma poderosa para gerenciar recursos tecnológicos de maneira eficaz e acessível.
        </div>
        
        <img src="/tela empresa.png" alt="" className={styles.telaEmpresa} />
        </div>
      </div>
    </div>
  );
}

export default Home;
