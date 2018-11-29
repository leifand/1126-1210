import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import Deck from './decklib';

export class Card extends React.Component {
    render() {
      return (
        <button className="card">
          {this.props.value}
        </button>
      );
    }
  }
  
  export class Board extends React.Component {
    renderCard(n) {
      return <Card value={n} />;
    }
  
    render() {
      const status = 'Next player: value';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderCard(deck.hands[0][0].name)}
            {this.renderCard(deck.hands[0][1].name)}
            {this.renderCard(deck.hands[0][2].name)}
            {this.renderCard(deck.hands[0][3].name)}
            {this.renderCard(deck.hands[0][4].name)}
            {this.renderCard(deck.hands[0][5].name)}
            {this.renderCard(deck.hands[0][6].name)}
            {this.renderCard(deck.hands[0][7].name)}
            {this.renderCard(deck.hands[0][8].name)}
            {this.renderCard(deck.hands[0][9].name)}
            {this.renderCard(deck.hands[0][10].name)}
            {this.renderCard(deck.hands[0][11].name)}
            {this.renderCard(deck.hands[0][12].name)}
            {this.renderCard(" ")}
            {this.renderCard(deck.sum_majors(0))}          
          </div>
          <div className="board-row">
            {this.renderCard(deck.hands[1][0].name)}
            {this.renderCard(deck.hands[1][1].name)}
            {this.renderCard(deck.hands[1][2].name)}
            {this.renderCard(deck.hands[1][3].name)}
            {this.renderCard(deck.hands[1][4].name)}
            {this.renderCard(deck.hands[1][5].name)}
            {this.renderCard(deck.hands[1][6].name)}
            {this.renderCard(deck.hands[1][7].name)}
            {this.renderCard(deck.hands[1][8].name)}
            {this.renderCard(deck.hands[1][9].name)}
            {this.renderCard(deck.hands[1][10].name)}
            {this.renderCard(deck.hands[1][11].name)}
            {this.renderCard(deck.hands[1][12].name)}
            {this.renderCard(" ")}
            {this.renderCard(deck.sum_majors(1))}
          </div>
          <div className="board-row">
            {this.renderCard(deck.hands[2][0].name)}
            {this.renderCard(deck.hands[2][1].name)}
            {this.renderCard(deck.hands[2][2].name)}
            {this.renderCard(deck.hands[2][3].name)}
            {this.renderCard(deck.hands[2][4].name)}
            {this.renderCard(deck.hands[2][5].name)}
            {this.renderCard(deck.hands[2][6].name)}
            {this.renderCard(deck.hands[2][7].name)}
            {this.renderCard(deck.hands[2][8].name)}
            {this.renderCard(deck.hands[2][9].name)}
            {this.renderCard(deck.hands[2][10].name)}
            {this.renderCard(deck.hands[2][11].name)}
            {this.renderCard(deck.hands[2][12].name)}
            {this.renderCard(" ")}
            {this.renderCard(deck.sum_majors(2))}          
          </div>
          <div className="board-row">
            {this.renderCard(deck.hands[3][0].name)}
            {this.renderCard(deck.hands[3][1].name)}
            {this.renderCard(deck.hands[3][2].name)}
            {this.renderCard(deck.hands[3][3].name)}
            {this.renderCard(deck.hands[3][4].name)}
            {this.renderCard(deck.hands[3][5].name)}
            {this.renderCard(deck.hands[3][6].name)}
            {this.renderCard(deck.hands[3][7].name)}
            {this.renderCard(deck.hands[3][8].name)}
            {this.renderCard(deck.hands[3][9].name)}
            {this.renderCard(deck.hands[3][10].name)}
            {this.renderCard(deck.hands[3][11].name)}
            {this.renderCard(deck.hands[3][12].name)}
            {this.renderCard(" ")}          
            {this.renderCard(deck.sum_majors(3))}
            {this.renderCard(deck.sum_all_majors())}         
          </div>
        </div>
      );
    }
  }
    
  export class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }