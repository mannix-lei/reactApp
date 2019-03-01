import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Contacts extends Component {

    state = {
        count: 0,
    }

    componentDidMount() {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
            <View>
                <Text>{this.state.count}</Text>
                <Text>联系人</Text>
            </View>
        )
    }
}
