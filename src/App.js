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
    topScore: 0,
    message: ''
  };

  // check if this has been clicked before
  // is it in the clickedPops array?
  handleClick = (event) => {
    const clickedPopsCopy = this.state.clickedPops;
    let targetID = event.target.id;
    
    if (!clickedPopsCopy.includes(targetID)) {
      // if not clicked yet, add this ID to the array
      clickedPopsCopy.push(targetID);

      // increment score && check against topScore
      this.setState({ score: this.state.score + 1 });

      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 });
      }


    } else {
      // display losing text for 2.5 seconds
      this.setState({ message: <h3 className="text-white incorrect">You Lose! Play again!</h3>});

      setTimeout(function() {
        this.setState({ message: '' });
      }
      .bind(this), 2500);

      this.resetGame();
    };
    
    // check win
    if (clickedPopsCopy.length >= 12) {
      // display winning text for 2.5 seconds
      this.setState({ message: <h3 className="text-white correct">You win! Play again!</h3>});

      setTimeout(function() {
        this.setState({ message: '' });
      }
      .bind(this), 2500);

      this.resetGame();
    }
    
    


    

    // shuffle cards after each click
    this.handleShuffle();
  }

  
  handleShuffle = () => {
    let shuffledCards = shuffle(funkoPops);
    this.setState( {funkoPops: shuffledCards} );
  }

  resetGame = () => {
    // reset score and clicked array
    this.setState({ clickedPops: [] });
    this.setState({ score: 0 });
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
          {this.state.message}
          <div className="App-body mx-auto p-sm-2 p-md-4">

            {/* cycle through array & create Cards component */}
            {this.state.funkoPops.map(item => (
              <Cards
                // pass info to Cards component
                key={item.id}
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
