import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import funkoPops from './funkoPops.json';


const shuffle = (array) => {

  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};


class App extends React.Component {
  state = {
    funkoPops,
    clickedPops: [],
    score: 0,
    topScore: 10
  };

  handleClick = (id) => {
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledCards = shuffle(funkoPops);
    this.setState( {funkoPops: shuffledCards} );
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
