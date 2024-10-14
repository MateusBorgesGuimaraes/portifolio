import Header from '../Header/Header';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.homeContainer}>
        <h1 className={styles.title}>
          Desenvolvedor Deb/ <br /> Web Designer
        </h1>

        <p className={styles.description}>
          Olá, sou o Mateus Nasci 2001, Amo tecnologia, Me encontrei em Web
          Development Sempre busco me aprimorar tanto pessoalmente, quanto
          profissionalmente, Aberto a propostas !
        </p>
      </section>
    </div>
  );
};

export default Home;
