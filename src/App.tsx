import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useThemeStore } from './store/theme-store';

function App() {
  const [isDark, setIsDark] = React.useState(true);
  const buttonLigthRef = React.useRef<HTMLButtonElement>(null);
  const buttonDarkRef = React.useRef<HTMLButtonElement>(null);
  const { setTheme } = useThemeStore();

  // eslint-disable-next-line
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark),
  );

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(!isDark);
  };

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      buttonLigthRef.current?.classList.remove('active');
      buttonDarkRef.current?.classList.add('active');
    } else {
      document.body.classList.remove('dark');
      buttonLigthRef.current?.classList.add('active');
      buttonDarkRef.current?.classList.remove('active');
    }
  }, [isDark]);

  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <p className="linkdin">
            <a href="/">@linkedin</a>
          </p>
          <div className="buttons">
            <button
              ref={buttonLigthRef}
              className="button-ligth"
              onClick={toggleTheme}
            >
              <span></span>LIGHT
            </button>
            <button
              ref={buttonDarkRef}
              className="button-dark"
              onClick={toggleTheme}
            >
              <span></span>DARK
            </button>
          </div>
          <p className="copyright">©Mateus Borges</p>
          <p className="email">mateusguimaraes717@gmail.com</p>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
