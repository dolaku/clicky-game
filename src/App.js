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
    topScore: 10
  };

  handleClick = (id) => {
    alert('Clicked');
  }


  render() {
    return (
      <div className="wrapper">
        <Navbar 
        // pass info to NavBar component
          score={this.state.score}  
          topScore={this.state.topScore}  
        />
        
        <div className="App p-2">
          <div className="App-body mx-auto p-sm-2 p-md-4">
            
            {/* cycle through array & create Cards component */}
            {this.state.funkoPops.map(item => (
              <Cards 
              // pass info to Cards component
                key={item.name}
                id={item.id}
                image={item.image}
                handleClick={this.handleClick}
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
