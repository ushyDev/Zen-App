import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BalanceInvest from '../conteners/BalanceInvest'
import ChartDashboard from '../conteners/ChartDashboard'
import Date from '../conteners/Date'
import CarouselaInvest from '../components/CarouselaInvest'

export default class InvestmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    return (
      <View style={styles.contener}>
        <BalanceInvest />      
        <Date />
        <ChartDashboard />
        <CarouselaInvest show='Show all' onPress={() => this.props.navigation.navigate('watch')}/>
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