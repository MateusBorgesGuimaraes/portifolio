import React from 'react';
import Header from '../Header/Header';
import styles from './Sobre.module.css';
import { useThemeStore } from '../../store/theme-store';
import CssIcon from '../../iconsComponents/cssIcon';
import FigmaIcon from '../../iconsComponents/figmaIcon';
import HtmlIcon from '../../iconsComponents/htmlIcon';
import JavascriptIcon from '../../iconsComponents/javascriptIcon';
import NestIcon from '../../iconsComponents/nestIcon';
import NextIcon from '../../iconsComponents/nextIcon';
import NodeIcon from '../../iconsComponents/nodeIcon';
import ReactIcon from '../../iconsComponents/reactIcon';
import TailwindIcon from '../../iconsComponents/tailwindIcon';
import TypescriptIcon from '../../iconsComponents/typescriptIcon';

const Sobre = () => {
  const { theme } = useThemeStore();

  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.containerSobre}>
        <div className={styles.containerSobreMim}>
          <div className={styles.image}>
            <img src="/src/assets/images/image-test.jpg" alt="mateus" />
          </div>
          <div className={styles.containerText}>
            <p className={styles.text}>
              Me chamo Mateus Borges e Guimarães, tenho 23 anos e estou
              concluindo o Bacharelado em Sistemas de Informação, tive o
              primeiro contato com a área em 2020, onde acabei me apaixonando
              por programação Web e Design.
            </p>

            <p className={styles.text}>
              Tenho interesse em trabalhar com full stack na área de web,
              atualmente meu conhecimento se concentra mais na parte do front
              End.
            </p>

            <p className={styles.text}>
              Sou uma pessoa muito dedicada, estou sempre disposto a aprender
              novas tecnologias e a enfrentar quaisquer desafios propostos, sou
              muito comunicativo quando a questão é aprender algo.
            </p>

            <p className={styles.text}>
              Tenho inglês intermediário, tenho conhecimento de design de
              maneira que possa ajudar também a contribuir no processo criativo
              do desenvolvimento dos sites.
            </p>

            <p className={styles.text}>
              Ser uma pessoa curiosa, é o que me levou a aprender todas as
              etapas do desenvolvimento web, do design, ao front end e back end,
              de maneira que possa contribuir onde for necessário.
            </p>

            <p className={styles.text}>
              Sempre que começo algo, tenha certeza que vou dar o meu máximo
              para terminar.
            </p>
          </div>
        </div>
        <div className={styles.containerTecnologias}>
          <div>
            <h1>tecnologias</h1>
            <div className={styles.slider}>
              <div className={styles.list}>
                <div
                  className={styles.item}
                  style={{ '--position': 1 } as React.CSSProperties}
                >
                  <CssIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 2 } as React.CSSProperties}
                >
                  <FigmaIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 3 } as React.CSSProperties}
                >
                  <HtmlIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 4 } as React.CSSProperties}
                >
                  <JavascriptIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 5 } as React.CSSProperties}
                >
                  <NestIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 6 } as React.CSSProperties}
                >
                  <NextIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 7 } as React.CSSProperties}
                >
                  <NodeIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 8 } as React.CSSProperties}
                >
                  <ReactIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 9 } as React.CSSProperties}
                >
                  <TailwindIcon theme={theme ? 'white' : 'black'} />
                </div>

                <div
                  className={styles.item}
                  style={{ '--position': 10 } as React.CSSProperties}
                >
                  <TypescriptIcon theme={theme ? 'white' : 'black'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
