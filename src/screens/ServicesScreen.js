import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from '../mapStyle'
import CarouselaServices from '../components/CarouselServices'

export default class ServicesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers : [
        {
          latitude: 51.52364778396278,
          longitude: -0.0979915163577186,
          title: 'Spa',
          subtitle: '1234 Foo Drive'
        },
        {
          latitude: 51.52437563715399,
          longitude: -0.09870131893626618,
          title: 'Bingo',
          subtitle: '1234 Foo Drive'
        },
        {
          latitude: 51.52432555775456,
          longitude: -0.09691266634208924,
          title: 'Trip',
          subtitle: '1234 Foo Drive'
        }
      ]
    };
  }

  CustomMarker = (props) => (
    <View>
      <View  style={styles.markerContener}>
      <Text style={{color: 'white', fontSize: 14, fontFamily: 'avenir'}}>{props.title}</Text>
      </View>
      <View style={styles.triangle}></View>
      <View style={styles.circle}></View>
    </View>
  )

  
  render() {
    return (
      <View style={styles.contener}>
        <MapView 
            style={styles.map} 
            customMapStyle={mapStyle}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 51.52364778396278,
              longitude: -0.0979915163577186,
              latitudeDelta: 0.0002,
              longitudeDelta: 0.00321,
            }}
            
            >
            {this.state.markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                description={marker.description}
                onPress={() => this.props.navigation.navigate('servicesMore')}
              >
                <this.CustomMarker {...marker} />
              </Marker>
            ))}
            </MapView>
          <View style={styles.contenerBlue}>
            <View style={styles.line}></View>
              <CarouselaServices onPress={() => this.props.navigation.navigate('servicesMore')} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contener: {
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    flex: 1,
    backgroundColor: '#F5F6FA',
    height: '100%',
},
map: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  position: 'absolute'
},
contenerBlue:{
  height: 345,
  width: '100%',
  backgroundColor: '#4144c1',
  borderTopRightRadius: 26,
  borderTopLeftRadius: 26,
  paddingLeft: 18
},
line:{
  width: 75,
  height: 6,
  backgroundColor: 'white',
  alignSelf: 'center', 
  marginTop: 12,
  borderRadius: 4
},
markerContener: {
  width: 66,
  height: 38,
  backgroundColor: '#4144C1',
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center'
},
triangle: {
  width: 0,
  height: 0,
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderLeftWidth: 8,
  borderRightWidth: 8,
  borderBottomWidth: 6,
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderBottomColor: "#4144C1",
  transform: [{ rotate: "180deg" }],
  alignSelf: 'center'
},
circle: {
  width: 14,
  height: 14,
  borderRadius: 14 / 2,
  backgroundColor: "white",
  alignSelf: 'center',
  borderWidth: 4,
  borderColor: '#4144c1',
  marginTop: 6
},
});