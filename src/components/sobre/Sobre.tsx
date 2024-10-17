import React from 'react';
import Header from '../Header/Header';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.containerSobreMim}>
        <div className={styles.image}>
          <img src="/src/assets/images/image-test.jpg" alt="mateus" />
        </div>
        <div className={styles.containerText}>
          <p className={styles.text}>
            Me chamo Mateus Borges e Guimarães, tenho 23 anos e estou concluindo
            o Bacharelado em Sistemas de Informação, tive o primeiro contato com
            a área em 2020, onde acabei me apaixonando por programação Web e
            Design.
          </p>

          <p className={styles.text}>
            Tenho interesse em trabalhar com full stack na área de web,
            atualmente meu se concentra mais conhecimento na parte do front End.
          </p>

          <p className={styles.text}>
            Sou uma pessoa muito dedicada, estou sempre disposto a aprender
            novas tecnologias e a enfrentar quaisquer desafios propostos, sou
            muito comunicativo quando a questão é aprender algo e
            disponibilização a melhorar.
          </p>

          <p className={styles.text}>
            Tenho inglês intermediário, tenho conhecimentos de design de maneira
            que possa ajudar também a contribuir no processo criativo do
            desenvolvimento dos sites.
          </p>

          <p className={styles.text}>
            Ser uma pessoa curiosa, é o que me levou a aprender todas as etapas
            do desenvolvimento web, do design, ao front end ao back end, posso
            contribuir dentro das minhas habilidade com toda minha dfedicação.
          </p>

          <p className={styles.text}>
            Sempre que começo algo, tenha certeza que vou dar o meu máximo para
            terminar.
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
                <img src="/src/assets/icons/css-icon.svg" alt="css icon" />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 2 } as React.CSSProperties}
              >
                <img src="/src/assets/icons/figma-icon.svg" alt="figma icon" />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 3 } as React.CSSProperties}
              >
                <img src="/src/assets/icons/html-icon.svg" alt="html icon" />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 4 } as React.CSSProperties}
              >
                <img
                  src="/src/assets/icons/javascript-icon.svg"
                  alt="javascript icon"
                />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 5 } as React.CSSProperties}
              >
                <img src="/src/assets/icons/nest-icon.svg" alt="nest icon" />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 6 } as React.CSSProperties}
              >
                <img src="/src/assets/icons/next-icon.svg" alt="next icon" />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 7 } as React.CSSProperties}
              >
                <img src="/src/assets/icons/node-icon.svg" alt="node icon" />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 8 } as React.CSSProperties}
              >
                <img src="/src/assets/icons/react-icon.svg" alt="react icon" />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 9 } as React.CSSProperties}
              >
                <img
                  src="/src/assets/icons/tailwind-icon.svg"
                  alt="tailwind icon"
                />
              </div>

              <div
                className={styles.item}
                style={{ '--position': 10 } as React.CSSProperties}
              >
                <img
                  src="/src/assets/icons/typescript-icon.svg"
                  alt="typescript icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
