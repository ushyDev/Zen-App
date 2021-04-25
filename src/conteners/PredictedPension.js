import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class PredictedPension extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
          <Text style={styles.textTitle}>Predicted Pension</Text>
        <View style={styles.contenerPredicted}>
        <Text style={styles.textTitle}>Your Predicted Pension</Text>
        <View style={{width: 295, height: 1, backgroundColor: '#F5F6F5'}}></View>
        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20}}>
            <Text style={styles.textSmall}>Base Pension</Text>
            <Text style={styles.textNumber}>+£165</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20}}>
            <Text style={styles.textSmall}>In-app accumulated Pension</Text>
            <Text style={[styles.textNumber, {color: '#4144c1'}]}>+£324</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20}}>
            <Text style={styles.textSmall}>Investment Revenue</Text>
            <Text style={[styles.textNumber, {color: '#4144c1'}]}>+£1645</Text>
        </View>
        <View style={{width: 295, height: 1, backgroundColor: '#F5F6F5'}}></View>
        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20}}>
            <Text style={styles.textBig}>Investment Revenue</Text>
            <Text style={[styles.textNumberBig,]}>+2543.12</Text>
        </View>
        </View>
        <View style={styles.contenerPredictedSecond}>
        <Text style={styles.textTitle}>Set a safe zone</Text>
        <Text style={styles.textSec}>
        To be sure that you won’t loose your investments set a Minimal Predicted Pension. All of the inevsting actions will be revoked as you’ll reach this value.
        </Text>
        <View style={{width: 295, height: 1, backgroundColor: '#F5F6F5', marginBottom: 3}}></View>

        <View style={{flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', paddingRight: 20}}>
            <Text style={styles.textSmall}>Minimal Predicted Pension</Text>
            <Text style={[styles.textNumber, {color: 'red'}]}>£2000.00</Text>
        </View>
        <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                <Text style={styles.textButton}>Sate Safe Zone</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
        width: '87%'
    },
    contenerPredicted:{
        height: 200,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 2,
        borderRadius: 24,
        paddingLeft: 16,
        paddingTop: 2
    },
    contenerPredictedSecond:{
        height: 210,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 13,
        borderRadius: 24,
        paddingLeft: 16,
        paddingTop: 2
    },
    textTitle: {
        fontFamily: 'avenir',
        fontSize: 14,
        color: 'black',
        marginTop: 15,
        marginBottom: 8
    },
    textSmall:{
        color: '#5f5f5f',
        fontFamily: 'avenirMedium'
    },
    textNumber:{
        fontFamily: 'avenir',
        fontSize: 14
    },
    textBig:{
        color: 'black',
        fontFamily: 'avenir',
        fontSize: 16
    },
    textNumberBig:{
        fontFamily: 'avenir',
        fontSize: 18,
        color: '#29cc97'
    },
    textSec:{
        color: 'black',
        fontFamily: 'avenirMedium'
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: 16.15,
        marginTop: 16,
        backgroundColor: '#4144c1',
        width: 116,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    textButton:{
        fontFamily: 'avenir',
        fontSize: 14,
        color: 'white'
    }
});