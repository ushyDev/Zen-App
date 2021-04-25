import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {COLORS} from '../colors'

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.contener, {backgroundColor: props.backgroundColor}]}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
    contener: {
        width: '87%',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        color: COLORS.white,
        fontFamily: 'avenir',
        fontSize: 16
    }
});