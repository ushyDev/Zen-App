import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class InfoContenerTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <View style={styles.blueContener}>
            <Image style={{width: 36, height: 36, alignSelf: 'center', marginRight: 16, resizeMode: 'contain'}} source={require('../../assets/Vector.png')} />
            <View style={{flexDirection: 'column', width: '100%', width: 234}}>
            <Text style={styles.title}>Transfer money safely</Text>
            <Text style={styles.text}>You transfer may be performed only by licensed banks in your country</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        width: '87%',
        marginTop: 2,
        alignSelf: 'center'
    },
    titleContener:{
        fontSize: 14,
        fontFamily: 'avenir',
        color: 'black',
        marginBottom: 0
    },
    blueContener:{
        width: '100%',
        height: 93,
        backgroundColor: '#4144c1',
        borderRadius: 24,
        paddingTop: 16,
        paddingLeft: 16.15,
        paddingBottom: 24,
        flexDirection: 'row'
    },
    title:{
        color: 'white',
        fontSize: 14,
        fontFamily: 'avenir'
    },
    text:{
        color: 'white',
        fontSize: 14,
        fontFamily: 'avenirMedium'
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: 16.15,
        marginTop: 16,
        backgroundColor: 'white',
        width: 116,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    textButton:{
        fontFamily: 'avenir',
        fontSize: 14,
        color: '#4144c1'
    }
});