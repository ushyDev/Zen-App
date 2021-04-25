import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import InfoContenerServ from '../conteners/InfoContenerServ'
import CarouselServ from '../components/CarouselServ'

export default class ServicesMoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <InfoContenerServ />
        <CarouselServ />
        <View style={{flexDirection: 'row'}}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        paddingTop: 20,
        alignItems: 'center',
        width: '100%'
    },
    imageContener:{
        marginTop: 16
    }
});