import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class CarouselaServices extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Guided Trip",
              text: "Travel with your friends",
              image: require('../../assets/guide.png')
          },
          {
              title:"Consulation",
              text: "Schedule a doctor visit",
              image: require('../../assets/men.png')

          },
          {
              title:"Kniting Lessons",
              text: "Learn how to craft clothes",
              image: require('../../assets/girl.png')

          },
          
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View  style={styles.itemContener}>
            <Image style={{width: 50, height: 75, resizeMode: 'contain', alignSelf: 'center', paddingBottom: 4}} source={item.image}/>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>

        )
    }

 

    render() {
        return (
            <View style={styles.contener}>
                <Text onPress={this.props.onPress} style={styles.titleDiscover}>Services nearby</Text>
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
        width: '100%',
        marginTop: 14
        
    
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
        marginRight: 18,
        paddingTop: 14,
        paddingHorizontal: 14,
        borderRadius: 24
        
    },
    titleDiscover:{
        fontSize: 14,
        fontFamily: 'avenir',
        color: 'white',
        marginVertical: 9
    }
});
