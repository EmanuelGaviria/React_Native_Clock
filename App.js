import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hour from './components/Hour';
import Minutes from './components/Minutes';
import Seconds from './components/Seconds';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Hour style={styles.text}/> 
        <Minutes/>
        <Seconds/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',   
  }  
});