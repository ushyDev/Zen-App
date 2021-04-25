import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';

export default class BalanceInvest extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            value: '£12452.55',
            bank: 'JP Morgan Account',
            image: require('../../assets/bank.png')

        },
        {
            value: '£19329.17',
            bank: 'Feith',
            image: require('../../assets/bank2.png')

        },
        {
            value: '£12452.55',
            bank: 'Deutch',
            image: require('../../assets/bank.png')

        },
        {
            value: '£12452.55',
            bank: 'Merc',
            image: require('../../assets/bank2.png')

        },
        {
            value: '£12452',
            bank: 'Keith',
            image: require('../../assets/bank.png')

        },
          
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={styles.balance}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{marginTop: 18, width: 45, height: 45, resizeMode: 'cover'}} source={item.image} />
          <View style={{flexDirection: 'column', paddingTop: 14, paddingLeft: 18, }}>
            <Text style={styles.textSmall}>{item.bank}</Text>
            <Text style={styles.textBig}>{item.value}</Text>
          </View>
          </View>
        </View>

        )
    }

 

    render() {
        return (
          <View style={styles.contener}>
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
    width: '87%',
    height: 81
  },
  balance:{
    width: 229,
    height: 81,
    backgroundColor: 'white',
    borderRadius: 24,
    marginRight: 18
  },
  textSmall:{
    fontSize: 14,
    fontFamily: 'avenirMedium'
  },
  textBig:{
    marginTop: 5,
    fontFamily: 'avenir',
    fontSize: 24
  },
  balanceContener:{
    flexDirection: 'row'
  },
});
