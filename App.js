import React, { Component } from 'react';
// import Gauge from './src/components/Gauge-chart';
import AreaChartExample from './src/components/AreaChartExample';
// import BarChartExample from './src/components/BarChartExample';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}></Text>
          {/* <Gauge  currentValue = {180} /> */}
          <AreaChartExample />
          {/* <BarChartExample /> */}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
