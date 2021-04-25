import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { COLORS } from '../colors';
import Button from '../components/Button'
import Input from '../components/Input'
import WelcomContener from '../conteners/WelcomContener'

export default class FundScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '£ 50'
    };
  }

  render() {
    return (
      <View style={styles.contener}>

      <View style={styles.textContener}>
      <Text style={styles.title}>Fund your account</Text>
      <Text style={styles.text}>In order to start, you’ll need to systematically transfer your funds. Don’t worry this can be even a small amount. You may change it later.</Text>
      </View>

      <View style={styles.slider}>
      <Text style={styles.textInput}>Set an automatic monthly transfer</Text>
        <Input
        placeholder='XXXX'
        onChangeText={text => this.setState({text: text})}
        defaultValue={this.state.text}
        />
      </View>

      <View style={styles.buttons}>
      <Button onPress={() => this.props.navigation.navigate('tab')} text='Sign up' backgroundColor={COLORS.primary} />
      
      <Text onPress={() => this.props.navigation.navigate('tab')} style={styles.textOr}>Skip for Now</Text>

    </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  contener: {
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingVertical: 75
  },
  textContener:{
      // height: '10%',
      width: '87%'
  },
  slider: {
    width: '100%',
  },
  buttons: {
      width: '100%',
      justifyContent: 'space-between', 
      alignItems: 'center',
      height: 48
  },
  textOr: {
      color: '#4414c1',
      fontFamily: 'avenirMedium',
      marginTop: 24,
      fontSize: 14
  },
  title:{
    fontSize: 24,
    fontFamily: 'avenir',
    marginBottom: 11
  },
  text:{
    fontFamily: 'avenirMedium',
    fontSize: 14
  },
  textInput: {
    alignSelf: 'center',
    fontFamily: 'avenir',
    marginBottom: 24
  }


});
