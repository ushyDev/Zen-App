import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class Carousela extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Your Future In your hands",
              text: "A way to plan a future and a lifestyle",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'transparent',
              height: 53,
            }}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>

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
                  backgroundColor: '#4144C1'
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
                <View style={{height: 53}}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
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
        height: 83,
        width: '87%',
        
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
