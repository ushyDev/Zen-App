import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Input from '../components/Input'
import ConfirmationField from '../components/ConfirmationField'
import {COLORS} from '../colors'

export default class WelcomContenerBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
        background: 0
    };
  }
//bardzo brzydki kod
  render() {
    return (
      <View style={styles.contener}>
        <Text style={styles.text}> {this.props.title} </Text>

        <View style={styles.bankHor}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({background: 1})} style={[styles.bank, {borderColor: this.state.background === 1 ? COLORS.primary : 'white'}]}>
            <Image style={{width: 134, height: 59, resizeMode: 'contain'}} source={require('../../assets/PNC-Bank-Logo-500x281.png')} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({background: 2})} style={[styles.bank, {borderColor: this.state.background === 2 ? COLORS.primary : 'white'}]}>
                <Image style={{width: 134, height: 59, resizeMode: 'contain'}} source={require('../../assets/Citibank-logo-500x170.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.bankHor}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({background: 3})} style={[styles.bank, {borderColor: this.state.background === 3 ? COLORS.primary : 'white'}]}>
            <Image style={{width: 134, height: 59, resizeMode: 'contain'}} source={require('../../assets/Santander-Logo-500x176.png')} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({background: 4})} style={[styles.bank, {borderColor: this.state.background === 4 ? COLORS.primary : 'white'}]}>
            <Image style={{width: 134, height: 59, resizeMode: 'contain'}} source={require('../../assets/JP_Morgan_Chase_logo_PNG2.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.bankHor}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({background: 5})} style={[styles.bank, {borderColor: this.state.background === 5 ? COLORS.primary : 'white'}]}>
            <Image style={{width: 134, height: 109, resizeMode: 'contain'}} source={require('../../assets/Barclays-logo-600x400.png')} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({background: 6})} style={[styles.bank, {borderColor: this.state.background === 6 ? COLORS.primary : 'white'}]}>
            <Image style={{width: 134, height: 59, resizeMode: 'contain'}} source={require('../../assets/Wells-Fargo-logo-500x360.png')} />
            </TouchableOpacity>
        </View>
        <Text style={styles.textOr}>Or</Text>
        <Text style={styles.textConnect}>Connect with your credit Card</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
      justifyContent: 'center',
      height: 447,
      
    },
    text:{
      alignSelf: 'center',
      fontFamily: 'avenir',
      fontSize: 16,
      marginLeft: 35,
      marginRight: 67,
      textAlign: 'left',
      marginBottom: 24,
      marginTop: 102
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
    textOr:{
    alignSelf: 'center',
      fontFamily: 'avenirMedium',
      fontSize: 16,
      marginBottom: 18
     
    },
    textConnect:{
    alignSelf: 'center',
    fontFamily: 'avenir',
    fontSize: 16,
    color: COLORS.primary
    }
});