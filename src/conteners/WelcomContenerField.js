import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input'
import ConfirmationField from '../components/ConfirmationField'

export default class WelcomContenerField extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <Text style={styles.text}> {this.props.title} </Text>
        <ConfirmationField />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
      justifyContent: 'center',
      height: 447
    },
    text:{
      alignSelf: 'center',
      fontFamily: 'avenir',
      fontSize: 16,
      marginBottom: 24
    }
});