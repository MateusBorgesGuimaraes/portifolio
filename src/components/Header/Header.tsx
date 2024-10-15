import { Logo } from '../../iconsComponents/logo';
import { useThemeStore } from '../../store/theme-store';
import styles from './Header.module.css';

const Header = () => {
  const { theme } = useThemeStore();

  return (
    <header className={styles.header}>
      <a href="/">
        <Logo theme={theme ? 'white' : 'black'} />
      </a>
      <button>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
