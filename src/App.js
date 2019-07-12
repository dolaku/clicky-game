import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import funkoPops from './funkoPops.json';

class App extends React.Component {
  state = {
    funkoPops,
    clickedPops: [],
    score: 0,
    topScore: 0
  };

  handleClick = (id) => {
    alert('Clicked');
  }


  render() {
    return (
      <div className="wrapper">
        <Navbar />
        
        <div className="App p-2">
          <div className="App-body mx-auto p-sm-2 p-md-4">
            
            {this.state.funkoPops.map(item => (
              <Cards 
                key={item.name}
                id={item.id}
                image={item.image}
              />
            ))}
          
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
