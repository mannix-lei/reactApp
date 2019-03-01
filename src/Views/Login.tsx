import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from 'antd-mobile-rn';

export default class Login extends Component {

    static navigationOptions = ({ navigation }: any) => {
        return {
            title: 'Login',
        }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('token', 'abc');
        (this.props as any).navigation.navigate('App');
    };

    render() {
        return (
            <View style={ styles.bg }>
                <Image source={require('../img/logo.png')} style={styles.img} />
               <Button onClick={ () => this._signInAsync()}>登录</Button>
               <Button onClick={ () => alert('zhuce')}>注册</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 50,
        fontFamily: "Times New Roman",
    },
    img: {
        width: 240,
        height: 80,
        
    }
}) 