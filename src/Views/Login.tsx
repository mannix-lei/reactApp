import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Login extends Component {

    constructor(props: object) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { routeName, params } = (this.props as any).navigation.state.params;

        return (
            <View>
                <Text>this is Login page</Text>
                <Text>{routeName}</Text>
                <Text>{params.name}</Text>
            </View>
        )
    }
}