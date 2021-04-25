import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Date() {
  return (
    <View style={styles.contener}>
        <View style={styles.line}></View>
        <Text style={styles.text}>23.04</Text>
        <View style={styles.line}></View>
        <Text style={styles.text}>24.04</Text>
        <View style={styles.line}></View>
        <View style={styles.light}>
        <Text style={styles.textSpecial}>25.04</Text>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.text}>26.04</Text>
        <View style={styles.line}></View>

     </View>
  );
}

const styles = StyleSheet.create({
    contener: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 140,
        justifyContent: 'space-around',
        alignSelf: 'center'
    },
    line:{
        width: 2,
        height: 298,
        backgroundColor: '#F0F0F0'
    },
    text:{
        fontFamily: 'avenirMedium',
        fontSize: 14,
        color: '#5f5f5f',
        // paddingHorizontal: 26,
        marginTop: 5
    },
    textSpecial:{
        fontFamily: 'avenirMedium',
        fontSize: 14,
        color: '#4144C1',
        // paddingHorizontal: 26,
        marginTop: 5,
    },
    light:{
        width: 50,
        height: 30,
        backgroundColor: '#F0F1FE',
        alignItems: 'center',
        borderRadius: 4
    }
});