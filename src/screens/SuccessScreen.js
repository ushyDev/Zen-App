import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button'
import {COLORS} from '../colors'

export default class SuccessScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
      console.log('WTF')
  }

  render() {
    return (
        <View style={styles.contener}>
        <View style={styles.image}>
        <Image style={{width: 239, height: 425, resizeMode: 'contain', bottom: 0, alignSelf: 'center'}} source={require('../../assets/SuccessImage.png')} />

        </View>
        <View style={styles.textContener}>
            <Text style={styles.title}>Success!</Text>
            <Text style={styles.text}>Your bank account have been connected!</Text>
        </View>
        <View style={styles.buttons}>
        <Button onPress={() => this.props.navigation.navigate('fund')} text='Got it!' backgroundColor={COLORS.primary} />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        flex: 1,
        backgroundColor: '#F5F6FA'
    },
    image:{
        height: '50%',
        width: '100%',
    },
    slider: {

    },
    buttons: {
        width: '100%',
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: 48
    },
    textOr: {
        color: '#4414c1',
        fontFamily: 'avenirMedium'
    },
    title:{
        alignSelf: 'center',
        fontFamily: 'avenir',
        fontSize: 24
    },
    text: {
        alignSelf: 'center',
        fontFamily: 'avenirMedium',
        fontSize: 16
    }
});