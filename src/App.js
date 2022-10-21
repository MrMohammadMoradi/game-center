import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePaje';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
