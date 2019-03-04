import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
import { Button } from 'antd-mobile-rn';

let time = 5;

export default class AuthLoadingScreen extends Component {

    state = {
        time: time,
    }

    constructor(props: any) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const token = await AsyncStorage.getItem('token');
        let timeOut = setInterval(() => {
            if(time === 1){
                clearInterval(timeOut);
                (this.props as any).navigation.navigate(token ? 'App' : 'Auth');
            }
            time --;
            this.setState({ time: time })
        },1000)
    }

    render () {
        return (
            <View style={ styles.bg }>
                <Text style={ styles.text }>Loading...</Text>
                <Text>This page will redirect to another one in {this.state.time}s </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
        fontSize: 40,
        color: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        margin: 'auto',
        fontSize: 50,
    }
})