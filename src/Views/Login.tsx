import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from 'antd-mobile-rn';

export default class Login extends Component {

    render() {
        return (
            <View style={ styles.bg }>
                <Image source={require('../img/logo.png')} style={styles.img} />
                <View style={styles.btnGroup}>
                    <Button style={styles.btn} type="primary" onClick={ () => (this.props as any).navigation.navigate('LoginIn') }>登录</Button>
                    <Button style={styles.btn} onClick={ () => alert('zhuce')}>注册</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        fontFamily: "Times New Roman",
    },
    img: {
        marginTop: 60,
        width: 240,
        height: 80,
    },
    btnGroup: {
        marginTop: 400,
        flex: 1,
        flexDirection: 'row',
    },
    btn: {
        width: 150,
        margin: 10,
    }
})