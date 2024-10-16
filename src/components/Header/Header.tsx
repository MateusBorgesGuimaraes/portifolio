import React from 'react';
import { Logo } from '../../iconsComponents/logo';
import { useThemeStore } from '../../store/theme-store';
import MenuModal from '../menuModal/MenuModal';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme } = useThemeStore();
  const [active, setActive] = React.useState(false);
  const handleMenuModal = () => {
    setActive(!active);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo theme={theme ? 'white' : 'black'} />
      </Link>
      <button onClick={handleMenuModal}>
        <span></span>
      </button>
      <MenuModal active={active} />
    </header>
  );
};

export default Header;
