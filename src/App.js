import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <header className="App-header">
          Hello
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
