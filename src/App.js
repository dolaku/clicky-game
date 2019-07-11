import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <header className="App-header">
          Hello
          <Cards />
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
