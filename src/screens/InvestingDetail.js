import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ChartStock from '../conteners/ChartStock'
import DateStock from '../conteners/DateStock'

export default class InvestingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <View style={styles.contenerStock}>
        <View style={{width: 63, height: 24, backgroundColor: '#29cc97', borderRadius: 42, marginLeft: 16, marginTop: 24, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 14, fontFamily: 'avenir', color: 'white'}}>+0,33%</Text>
        </View>     
        <View style={{marginTop: 12, marginLeft: 16}}>  
        <Text style={{fontFamily: 'avenirMedium', fontSize: 24}}>Gold</Text>
        <Text style={{fontFamily: 'avenir', fontSize: 24}}>£332.1</Text>

        </View> 
        <DateStock />
        <ChartStock />
        <View style={{width: 138, height: 32, backgroundColor: '#4144c1', borderRadius: 12, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginRight: 16, marginBottom: 16}}>
            <Text style={{fontFamily: 'avenir', color: 'white'}}>Add to Watchlist</Text>
        </View>
        </View>
        <View style={styles.bottom}>
            <View style={{flexDirection: 'row', marginTop: 35, marginLeft: 26, alignItems: 'center'}}>
                <View style={{width: 27, height: 27, backgroundColor: '#F0F1FE', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20}}>-</Text>
                </View>
                <Text style={{fontSize: 24, fontFamily: 'avenir', marginHorizontal: 18}}>120</Text>
                <View style={{width: 27, height: 27, backgroundColor: '#F0F1FE', borderRadius: 15, justifyContent: 'center', alignItems: 'center', paddingBottom: 3, paddingLeft: 1}}>
                <Text style={{ fontSize: 20}}>+</Text>
                </View>
                <View style={{width: 138, height: 32, backgroundColor: '#4144c1', borderRadius: 12, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginLeft: 52}}>
            <Text style={{fontFamily: 'avenir', color: 'white'}}>Add to Watchlist</Text>
        </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        paddingTop: 30,
        alignItems: 'center',
        width: '100%'
    },
    contenerStock: {
        height: 438,
        width: 327,
        backgroundColor: 'white',
        borderRadius: 24,
        marginBottom: 40
    },
    bottom:{
        width: '100%',
        height: 246,
        backgroundColor: 'white',
        borderRadius: 24
    }
});