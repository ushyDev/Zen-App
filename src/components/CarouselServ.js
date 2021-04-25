import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class CarouselServ extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              image: require('../../assets/card1.png')
          },
          {
            image: require('../../assets/card2.png')
          },
          {
            image: require('../../assets/card1.png')

          },
          
        ]
      }
    }

    _renderItem({item,index}){
        return (
           <Image style={{resizeMode: 'contain', alignSelf: 'center'}} source={item.image} />

        )
    }

    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
            //   containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 7,
                  height: 7,
                  borderRadius: 5,
                  marginHorizontal: 1,
                  backgroundColor: '#4144C1',
              }}
              
              inactiveDotOpacity={0.3}
              inactiveDotScale={0.99}
            //   containerStyle={{height: 10}}
            />
        );
    }

    render() {
        return (
            <View style={styles.contener}>
                <View style={{}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={320}
                  itemWidth={320}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  </View>
                { this.pagination }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contener: {
        height: 420,
        width: '100%',
        alignItems: 'center',
        marginTop: 0
    },
    textTitle:{
        fontFamily: 'avenir',
        fontSize: 24,
        color: '#4144c1'
        
    },
    text: {
        fontSize: 14,
        color: '#4144c1',
        fontFamily: 'avenirMedium'
    }
});
