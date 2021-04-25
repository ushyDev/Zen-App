import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RetrContener from '../conteners/RetrContener'
import YourPension from '../conteners/YourPension'
import CarouselaRetr from '../components/CarouselRetr'

export default class RetriementScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <RetrContener />
        <YourPension onPress={() => this.props.navigation.navigate('pension')}/>
        <CarouselaRetr />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contener: {
    // justifyContent: 'space-evenly', 
    alignItems: 'center', 
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingTop: 130
},
});