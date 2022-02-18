import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';
import Home from './components/Home';
import Fiat from './components/Fiat';
import Coin from './components/Coins';
import Global from './components/Global';
import Homepage from './components/Homepage';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <nav className="app-nav">
        <ul className="app-ul">
          <li className="app-li">
            <Link to="/">Crypto Plus</Link>
          </li>
          <li className="app-lix">
            <FaSistrix style={{ color: '#fff' }} />
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fiat" element={<Fiat />} />
        <Route path="/home" element={<Home />} />
        <Route path="/global" element={<Global />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </div>
  </Router>
);

export default App;
