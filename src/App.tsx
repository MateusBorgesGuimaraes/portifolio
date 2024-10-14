import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <p className="linkdin">
            <a href="/">@linkedin</a>
          </p>
          <div className="buttons">
            <button className="button-ligth">
              <span></span>LIGHT
            </button>
            <button className="button-dark">
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
