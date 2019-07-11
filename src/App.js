import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App mb-auto">
        <div className="App-body p-sm-2 p-md-4">
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
