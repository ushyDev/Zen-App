import React, { Component } from 'react';
import { View, Text, StyleSheet, LogBox } from 'react-native';
import { COLORS } from '../colors';
import * as Progress from 'expo-progress';
import Button from '../components/Button'
import Input from '../components/Input'
import WelcomContener from '../conteners/WelcomContener'
import WelcomContenerField from '../conteners/WelcomContenerField'
import WelcomContenerBank from '../conteners/WelcomContenerBank'


LogBox.ignoreAllLogs()

export default class OnBoardingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress1: 0.3,
      progress2: 0,
      progress3: 0,
      progress4: 0,
      step: 1,

      dateText: '31-01-2000',
      numberText: '(+12) 605 061 833'
    };
  }

  steps = () => {
    switch(this.state.step){
      case 1:
        this.setState({step: 2, progress1: 1, progress2: 0.3})
        break;
      case 2:
        this.setState({step: 3, progress2: 1, progress3: 0.3})
        break;
      case 3:
        this.setState({step: 4, progress3: 1, progress4: 0.3})
        break;
      case 4:
        console.log('succesScreen')
        this.props.navigation.navigate('success')
        break;
    }
    }
    
  

  render() {
    return (
      <View style={styles.contener}>

        <View style={styles.contenerProgress}>
          <Progress.Bar 
          isIndeterminate={false} 
          color={COLORS.primary} 
          isAnimated={true}
          progress={this.state.progress1}
          style={{width: 70}}
          trackColor='white'
          />
          <Progress.Bar 
          isIndeterminate={false} 
          color={COLORS.primary} 
          isAnimated={true}
          progress={this.state.progress2}
          style={{width: 70}}
          trackColor='white'
          />
          <Progress.Bar 
          isIndeterminate={false} 
          color={COLORS.primary} 
          isAnimated={true}
          progress={this.state.progress3}
          style={{width: 70}}
          trackColor='white'
          />
          <Progress.Bar 
          isIndeterminate={false} 
          color={COLORS.primary} 
          isAnimated={true}
          progress={this.state.progress4}
          style={{width: 70}}
          trackColor='white'
          />
        </View>

        <View style={styles.inputContener}>
          {(this.state.step === 1) &&
          <WelcomContener 
          title='What is your date of birth'
          placeholder='DD-MM-YYYY'
          onChangeText={(text) => this.setState({dateText: text})}
          defaultValue={this.state.dateText}
          />
          }
          {(this.state.step === 2) &&
          <WelcomContener 
          title='What is your phone number?'
          placeholder='XXX XXX XXX'
          onChangeText={(text) => this.setState({numberText: text})}
          defaultValue={this.state.numberText}
          />
          }
          {(this.state.step === 3) &&
          <WelcomContenerField
          title='Enter authentication code'
          />
          }
          {(this.state.step === 4) &&
          <WelcomContenerBank
          title='Choose your bank and connect with Your Account'
          />
          

          }
        </View>

        <View style={styles.buttonContener}>
          <Button text='Continue' backgroundColor={COLORS.primary} onPress={() => this.steps()} />
        </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.background
  },
  contenerProgress:{
    width: '88%',
    // marginTop: -100,
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute'
  },
  inputContener:{
    width: '100%',
    // marginBottom: 60
  },
  buttonContener:{
    width: '100%',
    
  }
});