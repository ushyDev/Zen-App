import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import InfoContener from '../conteners/InfoContener'
import PredictedPension from '../conteners/PredictedPension'

export default class YourPensionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
          <InfoContener />
          <PredictedPension />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        alignItems: 'center', 
        flex: 1,
        backgroundColor: '#F5F6FA',
        paddingTop: 23
    },
});