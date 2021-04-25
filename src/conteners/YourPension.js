import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class YourPension extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <Text style={styles.titleContener}> Your Pension </Text>
        <View style={styles.blueContener}>
            <Text style={styles.title}>Check your Predicted Pension</Text>
            <Text style={styles.text}>Your pension grows as you invest. Check it!</Text>
            <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                <Text style={styles.textButton}>View Pension</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        width: '87%',
        marginTop: 18
    },
    titleContener:{
        fontSize: 14,
        fontFamily: 'avenir',
        color: 'black',
        marginBottom: 12
    },
    blueContener:{
        width: '100%',
        height: 118,
        backgroundColor: '#4144c1',
        borderRadius: 24,
        paddingTop: 16,
        paddingLeft: 16.15
    },
    title:{
        color: 'white',
        fontSize: 14,
        fontFamily: 'avenir'
    },
    text:{
        color: 'white',
        fontSize: 14,
        fontFamily: 'avenirMedium'
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: 16.15,
        marginTop: 16,
        backgroundColor: 'white',
        width: 116,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    textButton:{
        fontFamily: 'avenir',
        fontSize: 14,
        color: '#4144c1'
    }
});