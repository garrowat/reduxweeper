import React from 'react';
import logo from './logo600.png';
import './App.css';
import GameBoard from './components/GameBoard.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {
        isEnded: false,
        isStarted: false,
        isWon: false,
      },
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState({ isStarted: true })
  }

  render() {
    const { isStarted } = this.state;
    return (
      <div className="App">
        {
          isStarted
           ? <GameBoard />
           : (
            <header className="App-header">
              <img alt="Reduxweeper" src={logo} />
              <h1>
                Reduxweeper
              </h1>
              <button className='blue' onClick={this.startGame} >Start</button>
              <p>
                Minesweeper in React/Redux
              </p>
            </header>
           )
        }
      </div>
    );
  }
}

export default App;
