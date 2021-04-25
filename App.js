import React, {useState, Component} from 'react';
import WelcomNavigator from './src/navigation/navigator'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

const fetchFonts = () => {
  return Font.loadAsync({
    roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    avenir: require('./assets/fonts/AvenirLTStd-Black.otf'),
    avenirBook: require('./assets/fonts/AvenirLTStd-Book.otf'),
    avenirRoman: require('./assets/fonts/AvenirLTStd-Roman.otf'),
    avenirMedium: require('./assets/fonts/Avenir-Medium.ttf'),




    
  })
}

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setDataLoaded(true)}
    onError={(err) => console.log(err) }
    />
  }

  return (
    <WelcomNavigator />
  );
}


