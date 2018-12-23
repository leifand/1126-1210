import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Card extends React.Component {
  render() {
    return (

        <View key={this.props.keyval} style={styles.card}> 
            <Text style={styles.cardText}>{this.props.val.suit}</Text>
            <Text style={styles.cardText}>{this.props.val.rank}</Text>

            <TouchableOpacity onPress={this.props.deletMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>delete</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    
});