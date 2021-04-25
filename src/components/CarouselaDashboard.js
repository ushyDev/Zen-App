import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class CarouselaDashboard extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Consultation",
              text: "Schedule a doctor visit",
              image: require('../../assets/men.png')
          },
          {
              title:"Knitting Lessons",
              text: "Learn how to craft clothes",
              image: require('../../assets/girl.png')

          },
          {
              title:"Guided Trip",
              text: "Travel with your friends",
              image: require('../../assets/men.png')

          },
          
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={styles.itemContener}>
            <Image style={{width: 56, height: 73, resizeMode: 'contain', alignSelf: 'center'}} source={item.image}/>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>

        )
    }

 

    render() {
        return (
            <View style={styles.contener}>
                <Text style={styles.titleDiscover}>Discover services</Text>
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
        marginTop: 100,
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
        width: 137,
        height: 173,
        backgroundColor: 'white',
        marginRight: 14,
        paddingTop: 14,
        paddingHorizontal: 14,
        borderRadius: 24
        
    },
    titleDiscover:{
        fontSize: 14,
        fontFamily: 'avenir',
        color: 'black',
        marginVertical: 9
    }
});
