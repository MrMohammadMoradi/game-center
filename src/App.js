import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap';

import Navbar from './Components/Header';
import GameCard from './Components/GameCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <GameCard/>
      </header>
    </div>
  );
}

export default App;
