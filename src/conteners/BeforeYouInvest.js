import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class BeforeYouInvest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.contener}>

      <View style={styles.contenerPredictedSecond}>
      <Text style={styles.textTitle}>Before you invest</Text>
      <Text style={styles.textSec}>
      It is good to lower any risk while investing with your life savings. We encourgae you to use our Knowledge Base to gain some skills.      </Text>
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
              <Text style={styles.textButton}>Learn More</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.titleContener}> Watchlist </Text>
        <TouchableOpacity activeOpacity={1} onPress={this.props.onPressStock} style={styles.contenerPredicted}>

        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.textWatch}>Silver</Text>
            <Text style={styles.textSmall}>SLV</Text>

            </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 63, height: 24, backgroundColor: '#29cc97', borderRadius: 42, marginRight: 14, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'avenir', color: 'white'}}>+1,15%</Text>
                    </View>
                <Text style={[styles.textNumber, {alignSelf: 'center'}]}>£661.232</Text>
                </View>
        </View>
        <View style={{width: 295, height: 1, backgroundColor: '#F5F6F5', marginTop: 12}}></View>

        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.textWatch}>Gold</Text>
            <Text style={styles.textSmall}>GLD</Text>

            </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 63, height: 24, backgroundColor: '#29cc97', borderRadius: 42, marginRight: 14, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'avenir', color: 'white'}}>+0,33%</Text>
                    </View>
                <Text style={[styles.textNumber, {alignSelf: 'center'}]}>£98.6532</Text>
                </View>
        </View>
        <View style={{width: 295, height: 1, backgroundColor: '#F5F6F5', marginTop: 12}}></View>

        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.textWatch}>Verizon</Text>
            <Text style={styles.textSmall}>VRZ</Text>

            </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 63, height: 24, backgroundColor: 'red', borderRadius: 42, marginRight: 14, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'avenir', color: 'white'}}>-0.66%</Text>
                    </View>
                <Text style={[styles.textNumber, {alignSelf: 'center'}]}>£15.8765</Text>
                </View>
        </View>
        <View style={{width: 295, height: 1, backgroundColor: '#F5F6F5', marginTop: 12}}></View>

        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.textWatch}>Doge</Text>
            <Text style={styles.textSmall}>DOGE</Text>

            </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 63, height: 24, backgroundColor: '#29cc97', borderRadius: 42, marginRight: 39, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'avenir', color: 'white'}}>+9,12%</Text>
                    </View>
                <Text style={[styles.textNumber, {alignSelf: 'center'}]}>£0,24</Text>
                </View>
        </View>
        <View style={{width: 295, height: 1, backgroundColor: '#F5F6F5', marginTop: 12}}></View>

        <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', paddingRight: 20, alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.textWatch}>Bitcoin</Text>
            <Text style={styles.textSmall}>BTC</Text>

            </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 63, height: 24, backgroundColor: '#29cc97', borderRadius: 42, marginRight: 14, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, fontFamily: 'avenir', color: 'white'}}>+1,15%</Text>
                    </View>
                <Text style={[styles.textNumber, {alignSelf: 'center'}]}>£8887.12</Text>
                </View>
        </View>

        </TouchableOpacity>

    </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
        width: '87%',
        marginBottom: -85
    },
    contenerPredicted:{
        height: 290,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 24,
        paddingLeft: 16,
        paddingTop: 12
    },
    contenerPredictedSecond:{
        height: 170,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 13,
        borderRadius: 24,
        paddingLeft: 16,
        paddingTop: 2,
        marginBottom: 24
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
    },
    titleContener:{
        fontSize: 14,
        fontFamily: 'avenir',
        color: 'black',
        marginBottom: 12
    },
    textWatch:{
        fontFamily: 'avenir',
        fontSize: 14,
        color: 'black',
    }
});