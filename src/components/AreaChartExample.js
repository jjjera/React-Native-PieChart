import React, { PureComponent } from 'react';
import AreaChart from './AreaChart';
import Grid from './Grid';
import XAxis from './x-axis';
import YAxis from './y-axis';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import dateFns from 'date-fns';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class AreaChartExample extends PureComponent {
  render() {
       const data = [
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 0),
         // },
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 1),
         // },
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 2),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 3),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 4),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 5),
         // },

         {
           value: 0,
           date: dateFns.setHours(new Date(2018,7,3), 6),
         },

         {
           value: 0.4,
           date: dateFns.setHours(new Date(2018,7,3), 6),
         },
         {
           value: 0.5,
           date: dateFns.setHours(new Date(2018,7,3), 7),
         },
         {
           value: 1.0,
           date: dateFns.setHours(new Date(2018,7,3), 8),
         },
         {
           value: 1,
           date: dateFns.setHours(new Date(2018,7,3), 8),
         },
         {
           value: 2,
           date: dateFns.setHours(new Date(2018,7,3), 8),
         },
         {
           value: 2.5,
           date: dateFns.setHours(new Date(2018,7,3), 8),
         },
         {
           value: 3,
           date: dateFns.setHours(new Date(2018,7,3), 9),
         },
         {
           value: 3.3,
           date: dateFns.setHours(new Date(2018,7,3), 10),
         },
         {
           value: 3.5,
           date: dateFns.setHours(new Date(2018,7,3), 11),
         },
         {
           value: 0,
           date: dateFns.setHours(new Date(2018,7,3), 12),
         },

         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 13),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 14),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 15),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 16),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 17),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 18),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 19),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 20),
         // },
         //
         // {
         //   value: 0,
         //   date: dateFns.setHours(new Date(2018,7,3), 21),
         // },
       ]

       const axesSvg = { fontSize: 10, fill: 'blue' };
       const verticalContentInset = { top: 10, bottom: 10 }
       const xAxisHeight = 30

    return (
      <View style = {{height: 200, padding:20, flexDirection: 'row'}}>
        <YAxis
          data = {data}
          style = {{marginBottom: xAxisHeight}}
          contentInset = {verticalContentInset}
          svg = {axesSvg}
          scale={scale.scaleBand}
          yAccessor = {({index}) => index}
          formatLabel = {(_, index) => data[index].value}
        />
        <View style = {{flex: 1, marginLeft: 10}}>
          <AreaChart
            style = {{flex: 1}}
            data = {data}
            yAccessor = {({item}) => item.value}
            xAccessor = {({item}) => item.date}
            contentInset = {verticalContentInset}
            svg = {{fill: 'rgba(134, 65, 244, 0.5)'}}
            curve = {shape.curveNatural}
            >
              <Grid />
          </AreaChart>
          <XAxis
            style = {{marginHorizontal: -10, height: xAxisHeight}}
            data = {data}
            formatLabel = {(value, index) => index}
            contentInset = {{left: 10, right: 10}}
            svg = {axesSvg}
            xAccessor = {({item}) => item.date }
            scale = {scale.scaleTime}
            formatLabel = {(value) => dateFns.format(value, 'HH:mm')}
          />
        </View>
      </View>
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
