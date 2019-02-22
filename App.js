import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { white } from 'ansi-colors';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: white, width: '100%', height: '100%' }}>
        <TextInput style={{height: 40}} placeholder="Type here" onChangeText={(text) => this.setState({ text })} />
        <Text style={{ padding: 10, fontSize: 42 }} >
          {this.state.text.split(' ').map(word => word && '**').join(' ')}
        </Text>
      </View>
    );
  }
}

