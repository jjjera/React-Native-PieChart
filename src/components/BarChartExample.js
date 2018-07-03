import React, { PureComponent } from 'react';
import BarChart from './BarChart/bar-chart';
import XAxis from './x-axis';
import YAxis from './y-axis';
import * as scale from 'd3-scale';
import Grid from './Grid';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class BarChartExample extends PureComponent {
  render() {
    const data = [14, 80, 100, 55, 30]

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
      />
      <View style = {{flex: 1, marginLeft: 10}}>

        <BarChart
          style = {{flex: 1}}
          data = {data}
          svg = {{fill: 'rgb(134, 65, 244)'}}
          contentInset = {{top: 20, bottom: 20}}
        >
        <Grid />
        </BarChart>
        <XAxis
          style = {{marginHorizontal: -10, height: xAxisHeight}}
          data = {data}
          scale = {scale.scaleBand}
          formatLabel = {(value, index) => index}
          labelStyle = {{color: 'black'}}
        />

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    padding: 20,
  },
});
