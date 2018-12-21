import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { Deck } from './decklib';

deck = new Deck();
deck.generate_deck();
deck.shuffle();
deck.deal_hands();  

export class Card extends Component {
    render() {
      return (
        <Text>
          {this.props.value}|
        </Text>
      );
    }
  }

  export class Row extends Component {
    
    renderCard(n) {
      return <Card value={n} />;
    }

    render() {
      return <View>
        <View style={{flex: 1, flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
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
          {this.renderCard("              ")}
          {this.renderCard(deck.sum_majors(0))}
        </View>
        <View>
          <Button title='Shuffle Deck' onPress={()=>{deck.shuffle();deck.deal_hands();this.render()}} />
        </View>
      </View>
    }
  }

  export class ShuffleButton extends Component {
    render() {
      return <Button title='Shuffle Deck' onPress={()=>deck.shuffle()} />
    }
  }
  
  export class Board extends Component {
    renderCard(n) {
      return <Card value={n} />;
    }
  
    render() {
      const status = 'xna';
  
      return (
        <View>
          <Text>Status: {status}</Text>
          <Text>
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
          </Text>
        </View>
      );
    }
  }
    
  export class Game extends React.Component {
    render() {
      return (
        <Board />
      );
    }
  }