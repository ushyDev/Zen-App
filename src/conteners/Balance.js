import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Balance(props) {
  return (
    <View style={styles.balanceContener}>
          <View style={styles.balance}>
            <View style={{flexDirection: 'column', paddingTop: 14, paddingLeft: 18, }}>
              <Text style={styles.textSmall}>Total Balance</Text>
              <Text style={styles.textBig}>£12452.55</Text>
            </View>
          </View>
          <View style={[styles.balance, {marginLeft:0}]}>
            <View style={{flexDirection: 'column', paddingTop: 14, paddingLeft: 18, }}>
              <Text style={styles.textSmall}>Monthly transfer</Text>
              <Text style={[styles.textBig, {color: '#29CC97'}]}>+£432.0</Text>
            </View>
          </View>
          <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Image source={require('../../assets/delete.png')} />
          </TouchableOpacity>
        </View>
  );
}


const styles = StyleSheet.create({
    balance:{
        width: 134,
        height: 81,
        backgroundColor: 'white',
        borderRadius: 24,
      },
      textSmall:{
        fontSize: 14,
        fontFamily: 'avenirMedium',
        color: '#5f5f5f'
      },
      textBig:{
        marginTop: 5,
        fontFamily: 'avenir',
        fontSize: 20
      },
      balanceContener:{
        flexDirection: 'row',
        width: 327,
        height: 81,
        backgroundColor: 'white',
        borderRadius: 24,
      },
      button:{
        width: 36,
        height: 36,
        backgroundColor: '#4144c1',
        alignSelf: 'center',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
      }
});