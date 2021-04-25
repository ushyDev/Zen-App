import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import InfoContenerTop from '../conteners/InfoContenerTop'
import Input from '../components/Input'
import Button from '../components/Button'

export default class TopUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <InfoContenerTop />
        <View style={{marginLeft: 24, marginTop: 14}}>
            <Text style={{fontFamily: 'avenirMedium', fontSize: 16, marginBottom: 12}}>Amount</Text>
            <Input 
                placeholder='£ XXXX'
            />
            <Text style={{fontFamily: 'avenirMedium', fontSize: 16, marginTop: 14, marginBottom: 12}}>Choose Source Bank</Text>
            <View style={styles.bankHor}>
        <TouchableOpacity activeOpacity={0.8}  style={[styles.bank, {borderColor: this.state.background === 5 ? COLORS.primary : 'white'}]}>
            <Image style={{width: 134, height: 109, resizeMode: 'contain'}} source={require('../../assets/Barclays-logo-600x400.png')} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}  style={[styles.bank, {borderColor: this.state.background === 6 ? COLORS.primary : 'white'}]}>
            <Image style={{width: 134, height: 59, resizeMode: 'contain'}} source={require('../../assets/Wells-Fargo-logo-500x360.png')} />
            </TouchableOpacity>
        </View>
        <Text style={{fontFamily: 'avenirMedium', fontSize: 16, marginBottom: 8, alignSelf: 'center'}}>Or</Text>
        <Text style={{fontFamily: 'avenirMedium', fontSize: 16, marginBottom: 8, }}>Pay by Credit Card</Text>
        <Image style={{marginBottom: 10}} source={require('../../assets/pay.png')} />
        <View style={{alignItems: 'center', marginLeft: -14}}>
        <Button text='Continue' backgroundColor='#4144c1' />
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
        paddingTop: 20,
        // alignItems: 'center'
    },
    bankHor:{
        flexDirection: 'row',
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'space-evenly',
        marginBottom: 24
    },
    bank:{
        height: 95,
        width: 156,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2
    },
});