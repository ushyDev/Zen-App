import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default class KnowledgeBaseUk extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.contener}>
                <View style={{alignItems: 'center', paddingBottom: 160}}>

        <Image style={{resizeMode: 'cover', width: '89%', alignSelf: 'center'}} source={require('../../assets/know2.png')} />
        <View style={{marginTop: 35, marginHorizontal: 24}}>
          <Text style={styles.textTitle}>Current Legal Base</Text>
          <Text style={styles.text}>
          Your employer must automatically enrol you into a pension scheme and make contributions to your pension if you’re eligible for automatic enrolment.
However, they do not have to contribute if you earn these amounts or less:
</Text>
<Text style={styles.textMedium}>£520 a month</Text>
<Text style={styles.textMedium}>£120 a week</Text>
<Text style={styles.textMedium}>£480 over 4 weeks</Text>
<Text style={styles.textTitle}>Salary sacrifice</Text>
<Text style={styles.text}>
You and your employer may agree to use ‘salary sacrifice’ (sometimes known as a ‘SMART’ scheme).

If you do this, you give up part of your salary and your employer pays this straight into your pension. In some cases, this will mean you and your employer pay less tax and National Insurance.

Ask your employer if they use salary sacrifice.
</Text>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        paddingTop: 26,
        // alignItems: 'center',
        width: '100%'
    },
    textTitle:{
      fontFamily: 'avenir',
      fontSize: 24,
      marginBottom: 18
    },
    text:{
      fontSize: 18,
      fontFamily: 'avenirMedium',
      marginBottom: 16

    },
    textMedium:{
      fontFamily: 'avenir',
      fontSize: 18,
      marginBottom: 18,
      marginLeft: 10
    }
});