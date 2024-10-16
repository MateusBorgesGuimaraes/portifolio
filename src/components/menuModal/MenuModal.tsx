import { Link } from 'react-router-dom';
import styles from './MenuModal.module.css';

type MenuModalProps = {
  active: boolean;
};

const MenuModal = ({ active }: MenuModalProps) => {
  if (!active) {
    return null;
  }
  return (
    <section className={styles.menuModal}>
      <div className={styles.containerModal}>
        <ul className={styles.containerList}>
          <li>
            <Link to="/">
              <span></span>INICIO
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <span></span>SOBRE
            </Link>
          </li>
          <li>
            <Link to="/projetos">
              <span></span>PROJETOS
            </Link>
          </li>
          <li>
            <Link to="/contato">
              <span></span>CONTATO
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MenuModal;
