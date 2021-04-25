import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class RetrContener extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16}}>
        <View style={styles.contenerBox}>
            <Text style={styles.title}>Pension contribution</Text>
            <Text style={styles.text}>19%</Text>
        </View>
        <View style={styles.contenerBox}>
            <Text style={styles.title}>Taxation amount</Text>
            <Text style={styles.text}>£1332.23</Text>
        </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.contenerBox}>
            <Text style={styles.title}>Insurance type</Text>
            <Text style={styles.text}>National</Text>
        </View>
        <View style={styles.contenerBox}>
            <Text style={styles.title}>Retirment age</Text>
            <Text style={styles.text}>65</Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        width: '87%'
    },
    contenerBox:{
        width: 154,
        height: 81,
        backgroundColor: 'white',
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingTop: 14,
        paddingLeft: 16,
        paddingRight: 3
            },

title:{
    fontFamily: 'avenirMedium',
    fontSize: 14,
    color: '#5F5F5F',
    marginBottom: 5
},
text:{
    fontSize: 24,
    fontFamily: 'avenir',
    color: 'black'
}
});
