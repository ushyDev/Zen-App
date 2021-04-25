import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Balance from '../conteners/Balance'
import ChartDashboard from '../conteners/ChartDashboard'
import Date from '../conteners/Date'
import CarouselaDashboard from '../components/CarouselaDashboard'

export default class DashBoardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <View style={styles.contener}>
        <Balance onPress={() => this.props.navigation.navigate('topup')}/>      
        <Date />
        <ChartDashboard />
        <CarouselaDashboard />
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
        paddingTop: 135
    },
    
});