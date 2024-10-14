import { Logo } from '../../iconsComponents/logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <Logo />
      </a>
      <button>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
