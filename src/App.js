import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import HomePage from '../src/Pages/Home/HomePage';
import Header from '../src/Components/Header';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import Catalogo from './Pages/Home/Catalogo';
import Ofertas from './Pages/Home/Ofertas';
import Contactanos from './Pages/Home/Contactanos';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Header />
    <Navbar />
      <div className="container">
        <ScrollToTop>
          <Route exact path="/" component={HomePage} />
          <Route path="/Servicios" component={Catalogo} />
          <Route path="/Portafolio" component={Ofertas} />
          <Route path="/Contactanos" component={Contactanos} />
        </ScrollToTop>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
