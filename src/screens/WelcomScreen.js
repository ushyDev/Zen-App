import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { COLORS } from '../colors';

import Button from '../components/Button'
import Carousela from '../components/Carousela'

export default class WelcomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
          <View style={styles.image}>
            <Image style={{width: '100%', height: 568, resizeMode: 'contain', bottom: 95}} source={require('../../assets/welcomImage.png')} />
          </View>
          <View style={styles.slider}>
              <Carousela />
          </View>
          <View style={styles.buttons}>
          <Button onPress={() => this.props.navigation.navigate('case')} text='Sign up' backgroundColor={COLORS.primary} />
          <Text style={styles.textOr}>Or</Text>
          <Button text='Log in' backgroundColor={COLORS.pink} />
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
        backgroundColor: '#E3E4FF'
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
        height: 135
    },
    textOr: {
        color: '#4414c1',
        fontFamily: 'avenirMedium'
    }
});