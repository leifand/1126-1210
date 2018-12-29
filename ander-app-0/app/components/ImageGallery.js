import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Modal, } from 'react-native';
import ImageElement from './ImageElement'

export default class ImageGallery extends React.Component {

    state = {
        modalVisible: false,
        modalImage: require('../img/antiunicorn.jpg'),
        images: [
            require('../img/antiunicorn.jpg'),
            require('../img/b2bunicorn.jpg'),
            require('../img/charspice.jpg'),
            require('../img/choices.jpg'),
            require('../img/flamingbanana3.jpg'),
            require('../img/kittycorn.jpg'),
            require('../img/lol1.jpg'),
            require('../img/unisus.jpg'),
        ],
    }

    setModalVisible(visible, imageKey) {
        this.setState({modalImage: this.state.images[imageKey]});
        this.setState({ modalVisible: visible});
    }

    getImage() {
        return this.state.modalImage;
    }

  render() {

        let images = this.state.images.map((val,key)=>{
            return <TouchableWithoutFeedback key={key} onPress={()=>{this.setModalVisible(true, key)}}>
                        <View style={StyleSheet.imagewrap}>
                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>
        })
    return (
        <View style={styles.container}>
            {images}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: 200,
        width: 100,
        backgroundColor: '#fff',
    }
});