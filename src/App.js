import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap';

import Navbar from './Components/Header';
import GameCard from './Components/GameCard';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <GameCard/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
