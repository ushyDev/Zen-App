import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import {COLORS} from '../colors'

import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';


//screens
import WelcomScreen from '../screens/WelcomScreen'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import SuccessScreen from '../screens/SuccessScreen'
import FundScreen from '../screens/FundScreen'
import InvestmentScreen from '../screens/InvestmentScreen'
import DashBoardScreen from '../screens/DashBoardScreen'
import RetriementScreen from '../screens/RetriementScreen'
import ServicesScreen from '../screens/ServicesScreen'
import YourPensionScreen from '../screens/YourPensionScreen'
import WatchListScreen from '../screens/WatchListScreen'
import ServicesMoreScreen from '../screens/ServicesMoreScreen'
import InvestingDetail from '../screens/InvestingDetail'
import KnowledgeBaseUk from '../screens/KnowledgeBaseUk'
import TopUpScreen from '../screens/TopUpScreen'

import { Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons, Fontisto, SimpleLineIcons, FontAwesome5 } from '@expo/vector-icons';



const WelcomNavigator = createStackNavigator({
    mainScr: {
        screen: WelcomScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            header: null
        
        })
    },
    case: {
        screen: OnBoardingScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold', marginTop: 41, }}>Welcom</Text>
            ),
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.background,
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
    
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 5
                
            },
            headerLeft: () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.primary} />               
                </TouchableOpacity>
              ),
            
        })
    },
    
    
},{
    
    headerMode: 'float',
    mode: 'modal'
})

const DashboardNavigator = createStackNavigator({
    dashboard: {
        screen: DashBoardScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold',   left: 10}}> Hi John, let's {"\n"} prepare for the future</Text>
            ),
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerStyle: {
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                
            },
    
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 1
                
            },
            headerRight: () => (
                <Image style={{right: 24}} source={require('../../assets/avatar.png')} />
              ),
            
            
        })
    },
    topup: {
        screen: TopUpScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold', marginTop: 41, }}>Top up</Text>
            ),
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.background,
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 5
                
            },
            headerLeft: () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.primary} />               
                </TouchableOpacity>
              ),
            
        })
    },
    
},{
    
    headerMode: 'float',
    mode: 'modal'
})

const InvestmentNavigator = createStackNavigator({
    dashboard: {
        screen: InvestmentScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold',   }}> Your Investments</Text>
            ),
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerStyle: {
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                
            },
    
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 1
                
            },
            headerRight: () => (
                <Image style={{right: 24}} source={require('../../assets/avatar.png')} />
              ),
            
            
        })
    },
    watch: {
        screen: WatchListScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold', marginTop: 41, }}>Investments</Text>
            ),
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.background,
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 5
                
            },
            headerLeft: () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.primary} />               
                </TouchableOpacity>
              ),
            
        })
    },
    investDetail: {
        screen: InvestingDetail,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold', marginTop: 41, }}>Buy Stocks</Text>
            ),
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.background,
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 5
                
            },
            headerLeft: () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.primary} />               
                </TouchableOpacity>
              ),
            
        })
    },
    know: {
        screen: KnowledgeBaseUk,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold', marginTop: 41, }}>Knowledge base</Text>
            ),
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.background,
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 5
                
            },
            headerLeft: () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.primary} />               
                </TouchableOpacity>
              ),
            
        })
    },
},{
    
    headerMode: 'float',
    mode: 'modal'
})

const RetriementNavigator = createStackNavigator({
    dashboard: {
        screen: RetriementScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold',   }}> Your Retirement</Text>
            ),
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerStyle: {
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                
            },
    
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 1
                
            },
            headerRight: () => (
                <Image style={{right: 24}} source={require('../../assets/avatar.png')} />
              ),
            
            
        })
    },
    pension: {
        screen: YourPensionScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold', marginTop: 41, }}>Your Pension</Text>
            ),
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.background,
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 5
                
            },
            headerLeft: () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.primary} />               
                </TouchableOpacity>
              ),
            
        })
    },
},{
    
    headerMode: 'float',
    mode: 'modal'
})


const Input = (props) => {
    const [value, setValue] = useState('');

    return(
        <View 
        style={{flexDirection: 'row', width: 260, height: 52, backgroundColor: 'white', borderRadius: 12, alignItems: 'center', paddingHorizontal: 12, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,}}>
        <AntDesign name="search1" size={20} color={COLORS.primary} />
            <TextInput 
            placeholder='Search for service'
            onChangeText={text => setValue(text)}
            defaultValue={value}
            style={{marginLeft: 7}}
            />
        </View>
    )
}

const ServicesNavigator = createStackNavigator({
    dashboard: {
        screen: ServicesScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Input />
            ),
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerStyle: {
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                
            },
    
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 1
                
            },
            headerRight: () => (
                <Image style={{right: 24}} source={require('../../assets/avatar.png')} />
              ),
            
            
        })
    },
    servicesMore: {
        screen: ServicesMoreScreen,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: () => (
                <Text style={{color: 'black', letterSpacing: 1, fontSize: 24, fontFamily: 'robotoBold', marginTop: 41, }}>Service detail</Text>
            ),
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.background,
                borderWidth: 0,
                height: 120,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
                letterSpacing: 5
                
            },
            headerLeft: () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,

                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={COLORS.primary} />               
                </TouchableOpacity>
              ),
            
        })
    },
    
},{
    
    headerMode: 'float',
    mode: 'modal'
})

const TabNavigator = createBottomTabNavigator({
    dash: {
        screen: DashboardNavigator,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <MaterialCommunityIcons name="home-variant"  size={32} color={tintColor} />
        ),
        tabBarLabel: null
        }
    },
    invest: {
        screen: InvestmentNavigator,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <MaterialCommunityIcons name="chart-line" size={30} color={tintColor} />
        ),
        tabBarLabel: null
        }
    },
    serv: {
        screen: ServicesNavigator,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <SimpleLineIcons name="compass" size={30} color={tintColor} />
        ),
        tabBarLabel: null
        }
    },
    retr: {
        screen: RetriementNavigator,
        navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <FontAwesome5 name="piggy-bank" size={24} color={tintColor} />
        ),
        tabBarLabel: null
        }
    },
},{

defaultNavigationOptions: ({navition}) => ({
    
}),
tabBarOptions: {
    showLabel: false,
    activeTintColor: COLORS.primary,
    inactiveTintColor: '#9091c5',
    
    style:{
    backgroundColor: 'white',
    borderTopWidth: 0,
    position: 'absolute',
    left: 24,
    right: 24, 
    bottom: Platform.OS === 'ios' ? 50 : 10,
    height: Platform.OS === 'ios' ? null : 81,
    borderRadius: 24,
    // marginTop: 36,
    paddingBottom: -20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,

},

tabStyle: {
width: 40,
// height: 50
}
},

})


const MainNavigator = createSwitchNavigator({
    welcom: WelcomNavigator,
    success: SuccessScreen,
    fund: FundScreen,
    tab: TabNavigator
},{
    mode: 'modal',
    initialRouteName: 'welcom' ,
    defaultNavigationOptions: {
    header: null, 
    
                             
}})

export default createAppContainer(MainNavigator)