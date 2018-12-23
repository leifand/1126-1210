import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Hand extends React.Component {
  render() {
    return (

        <View key={this.props.keyval} style={styles.hand}> 
            <Text style={styles.cardText}>{this.props.val.clubs[0]}</Text>
            <Text style={styles.cardText}>{this.props.val.clubs[1]}</Text>
            <Text style={styles.cardText}>{this.props.val.clubs[2]}</Text>
            <Text style={styles.cardText}>{this.props.val.diamonds[0]}</Text>
            <Text style={styles.cardText}>{this.props.val.diamonds[1]}</Text>
            <Text style={styles.cardText}>{this.props.val.diamonds[2]}</Text>
            <Text style={styles.cardText}>{this.props.val.hearts[0]}</Text>
            <Text style={styles.cardText}>{this.props.val.hearts[1]}</Text>
            <Text style={styles.cardText}>{this.props.val.spades[0]}</Text>
            <Text style={styles.cardText}>{this.props.val.spades[1]}</Text>
            <Text style={styles.cardText}>{this.props.val.spades[2]}</Text>
            <Text style={styles.cardText}>{this.props.val.spades[3]}</Text>
            <Text style={styles.cardText}>{this.props.val.spades[4]}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    hand: {
        flex: 1, 
        flexDirection: 'row',
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    cardText: {
        paddingLeft: 4,
        borderLeftWidth: 2,
        borderLeftColor: '#E91E63',
        fontWeight: 'bold',
    },
});