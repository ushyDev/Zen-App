import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import BeforeYouInvest from '../conteners/BeforeYouInvest'
import CarouselaInvest from '../components/CarouselaInvest'

export default class WatchListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.contener}>
        <View style={{alignItems: 'center', paddingBottom: 160}}>
          <BeforeYouInvest onPress={() => this.props.navigation.navigate('know')} onPressStock={() => this.props.navigation.navigate('investDetail')} />
          <CarouselaInvest />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        paddingTop: 20,
    },
});