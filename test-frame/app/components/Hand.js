import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Hand extends React.Component {


  render() {

    let clubs = '';
    for (let i=0; i<this.props.val.clubs.length; i++) {
        clubs += ' ';
        clubs += this.props.val.clubs[i];
    }
    let diamonds = '';
    for (let i=0; i<this.props.val.diamonds.length; i++) {
        diamonds += ' ';
        diamonds += this.props.val.diamonds[i];
    }
    let hearts = '';
    for (let i=0; i<this.props.val.hearts.length; i++) {
        hearts += ' ';
        hearts += this.props.val.hearts[i];
    }
    let spades = '';
    for (let i=0; i<this.props.val.spades.length; i++) {
        spades += ' ';
        spades += this.props.val.spades[i];
    }
    return (

        <View key={this.props.keyval} style={styles.hand}> 
            <View style={styles.suit}>
                <Text>{'\u2660'} {spades}</Text>     
            </View>
            <View style={styles.suit}>
                <Text>{'\u2665'} {hearts}</Text>
            </View>
            <View style={styles.suit}>
                <Text>{'\u2666'} {diamonds}</Text>
            </View>
            <View style={styles.suit}>
                <Text>{'\u2663'} {clubs}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    hand: {
        flex: 1,
        position: 'relative',
    },
    suit: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
    },
    cardText: {
        paddingLeft: 5,
        fontWeight: 'bold',
    },
});