import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Note from './Note';
import Hand from './Hand';
import Deck from './deck';

const deck = new Deck();
deck.generate_deck();
deck.shuffle();
deck.deal_hands();

let loadHand = (n) => {

  res = {
    clubs: [],
    diamonds: [],
    hearts: [],
    spades: [],
  }

  for (let i=0; i<deck.hands[n].length; i++) {
    suit = deck.hands[n][i].suit;
    console.log(suit);
    if (suit == 'C') res.clubs.push(deck.hands[n][i].rank);
    else if (suit == 'D') res.diamonds.push(deck.hands[n][i].rank);
    else if (suit == 'H') res.hearts.push(deck.hands[n][i].rank);
    else res.spades.push(deck.hands[n][i].rank); 
  }
  res.clubs.sort();
  res.clubs.reverse()
  res.diamonds.sort();
  res.diamonds.reverse();
  res.hearts.sort();
  res.hearts.reverse();
  res.spades.sort();
  res.spades.reverse();
  console.log(res);
  return res;
}

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      north: loadHand(0),
      east: loadHand(1),
      south: loadHand(2),
      west: loadHand(3),
      noteArray: [
        {
        "date": "2018/12/21",
        "note": 'director to table 13 plz!!',
        },
        {
        "date": "2018/12/21",
        "note": "Lacy is sooooooo unfair!!!!!",
        },
        {
        "date": "2018/12/21",
        "note": "Who ate all the cheese??",
        },
      ],
      noteText: '',
    }
  }

  render() {

    

    let notes = this.state.noteArray.map((val,key) => {
      return <Note key={key} keyval={key} val={val}
        deletMethod={()=>this.deleteNote(key)}/>
    });
    
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}> BRIDGE QUIZ </Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.northsouth}>
            <Hand val={this.state.north}/>
          </View>
          <View style={styles.eastwest}>
            <Hand val={this.state.west}/>
            <View style={styles.east}>
              <Hand val={this.state.east}/>
            </View>
          </View>
          <View style={styles.northsouth}>
            <Hand val={this.state.south}/>
          </View>
          {notes}
        </ScrollView>

        <KeyboardAvoidingView behavior='padding' style={styles.footer}>

        <TextInput 
          style={styles.textInput}
          onChangeText={(noteText)=>this.setState({noteText})}
          value={this.state.noteText}
          placeholder='>note'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'>
        </TextInput>
        
        </KeyboardAvoidingView>

        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      let d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        'note': this.state.noteText,
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
    console.log(this.state.noteArray);
  }

  deleteNote(key) {
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  northsouth: {
    alignItems: 'center',
  },
  eastwest: {
    flex: 1,
    flexDirection: 'row',
  },
  east: {
    marginRight: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});