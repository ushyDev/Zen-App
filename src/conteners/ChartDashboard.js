import React from 'react';
import { View,  StyleSheet } from 'react-native';

import { ClipPath, Defs, LinearGradient, Rect, Stop, G, Text, Circle, Line} from 'react-native-svg'
import { AreaChart, Path, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default function ChartDashboard() {

    const data = [ 10, 70, 40, 95,  120, 150]
    const dataCircle = [ 90, 0 ]


    const indexToClipFrom = 3

    const Gradient = () => (
        <Defs key={ 'defs' }>
            <LinearGradient id={ 'gradient' } x1={ '0%' } y={ '0%' } x2={ '0%' } y2={ '100%' }>
                <Stop offset={ '0%' } stopColor={ '#C3C5FF' } stopOpacity={ 1 }/>
                <Stop offset={ '100%' } stopColor={ 'rgba(255,255,255,0.0)' } stopOpacity={ 0.1 }/>
            </LinearGradient>
        </Defs>
    )

    const Clips = ({ x, width }) => (
        <Defs key={ 'clips' }>
            <ClipPath id={ 'clip-path-1' } key={ '0' }>
                <Rect x={ 0 } y={ '0' } width={ x(indexToClipFrom) } height={ '100%' }/>
            </ClipPath>
            <ClipPath id="clip-path-2" key={ '1' }>
                <Rect x={ x(indexToClipFrom) } y={ '0' } width={ width - x(indexToClipFrom) } height={ '100%' }/>
            </ClipPath>
        </Defs>
    )

    const Line = ({ line }) => (
        <Path
            key={ 'line' }
            d={ line }
            stroke={ '#4144C1' }
            fill={ 'none' }
            clipPath={ 'url(#clip-path-1)' }
        />
    )

    const DashedLine = ({ line }) => (
        <Path
            key={ 'dashed-line' }
            stroke={ '#4144C1' }
            d={ line }
            fill={ 'none' }
            clipPath={ 'url(#clip-path-2)' }
            strokeDasharray={ [ 4, 4 ] }
        />
    )

    const Decorator = ({ x, y, data }) => {
        return data.map((value , index) => (
            <Circle
                key={ index }
                cx={ x(index) }
                cy={ y(value) }
                r={ 4 }
                stroke={ '#4144c1' }
                fill={ 'white' }
            />
        ))
    }

    const Tooltip = ({ x, y }) => (
        <G
            x={ 190 }
            key={ 'tooltip' }
            onPress={ () => console.log('tooltip clicked') }
        >
            <G y={ 25 }>
                <Rect
                    height={ 40 }
                    width={ 75 }
                    stroke={ '#4144c1' }
                    fill={ '#4144c1' }
                    ry={ 10 }
                    rx={ 10 }
                />
                <Text
                    x={ 75 / 2 }
                    dy={ 20 }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                    stroke={ 'white' }
                    fontFamily={'avenir'}
                    fontSize={14}
                >
                    { `£12447` }
                </Text>
            </G>
            <G x={ 210 }>
                <Line
                    y1={ 40 }
                    y2={ y(data[ 3 ]) }
                    stroke={ 'red' }
                    strokeWidth={ 20 }
                />
                
            </G>
        </G>
    )




  return (
      <View style={{width: '100%', height: 100, marginTop: 80}}>
    <AreaChart
        style={{ height: 200, marginTop: 0 }}
        data={ data }
        contentInset={{ top: 30, bottom: 30,  }}
        numberOfTicks={4}
        
        curve={shape.curveNatural}
                svg={{
                    fill: 'url(#gradient)',
                    clipPath: 'url(#gradient)',
                }}
            >
                <Gradient/>
                <Clips/>
                <Line/>
                <DashedLine/>
                <Tooltip />
                <Decorator />
            </AreaChart>
    </View>
  );
}

const styles = StyleSheet.create({
    
});