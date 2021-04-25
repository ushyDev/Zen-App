import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class CarouselaRetr extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              
              image: require('../../assets/k1.png')
          },
          {
              
              image: require('../../assets/k2.png')

          },
          {
              
              image: require('../../assets/k3.png')

          },
          
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={styles.itemContener}>
            <Image style={{alignSelf: 'center', resizeMode: 'contain', width: 139,
        height: 173}} source={item.image}/>
          </View>

        )
    }

 

    render() {
        return (
            <View style={styles.contener}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.titleDiscover}>Discover services</Text>
                <Text style={styles.titleShow}>Show all</Text>
                </View>
                <FlatList 
                data={this.state.carouselItems}
                renderItem={this._renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener: {
        height: 213,
        width: '87%',
        marginTop: 24,
    },
    textTitle:{
        fontFamily: 'avenir',
        fontSize: 14,
        color: 'black',
        marginTop: 8
        
    },
    text: {
        fontSize: 14,
        color: '#5F5F5F',
        fontFamily: 'avenirMedium'
    },
    itemContener:{
        width: 139,
        height: 173,
        backgroundColor: 'white',
        marginRight: 14,
        
        borderRadius: 24
        
    },
    titleDiscover:{
        fontSize: 14,
        fontFamily: 'avenir',
        color: 'black',
        marginVertical: 9
    },
    titleShow:{
        fontSize: 14,
        fontFamily: 'avenir',
        color: '#4144c1',
        marginVertical: 9
    }
});
