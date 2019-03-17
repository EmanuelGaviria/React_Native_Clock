import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Seconds extends React.Component {

    constructor() {
        super();
        this.state = {          
          sec: new Date().getSeconds()
        };
      }

      run() {
        this.setState({            
            sec: new Date().getSeconds()
        });
      }

      componentDidMount() {
        this.intervalID = setInterval(
          () => this.run(),
          1000
        );
      }

  render() {
    return (
      <View>
        <Text style={styles.text}>:{this.state.sec}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FF8000'
  }
});