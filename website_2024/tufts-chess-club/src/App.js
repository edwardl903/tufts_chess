import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Slideshow from './components/Slideshow/Slideshow';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Slideshow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
