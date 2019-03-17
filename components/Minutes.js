import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Minutes extends React.Component {

    constructor() {
        super();
        this.state = {          
          min: new Date().getMinutes()
        };
      }

      run() {
        this.setState({            
            min: new Date().getMinutes()
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
        <Text style={styles.text}>:{this.state.min}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  text:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FF8000'
  }
});