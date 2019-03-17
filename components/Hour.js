import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hour extends React.Component {

    constructor() {
        super();
        this.state = {
          hour: new Date().getHours()          
        };
      }

      run() {
        this.setState({
            hora: new Date().getHours()            
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
        <Text style={styles.text}>{this.state.hour}
        
        </Text>
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