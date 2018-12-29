import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Note from './Note';
import ImageGallery from './ImageGallery';

export default class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        noteArray: [],
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
            <Text style={styles.headerText}>  ANDERAPP </Text>
          </View>
  
          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>

          <ImageGallery/>
  
          <KeyboardAvoidingView behavior='padding' style={styles.footer}>
  
            <TextInput 
              style={styles.textInput}
              onChangeText={(noteText)=>this.setState({noteText})}
              value={this.state.noteText}
              placeholder='>post'
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
        backgroundColor: '#4722cc',
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
        backgroundColor: '#4722cc',
        width: 70,
        height: 70,
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