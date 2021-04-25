import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {COLORS} from '../colors'

export default function Input(props) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
        placeholderTextColor='lightgrey'
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType="number"
        
         />
     </View>
  );
}

const styles = StyleSheet.create({
    input:{
        width: '87%',
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        alignSelf: 'center',
        textAlign: 'center',
        color: COLORS.primary,
        fontFamily: 'avenir',
        fontSize: 16,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
    }
    
});