import React, { Component } from 'react';
import { View, AsyncStorage, Text, StyleSheet } from 'react-native';
import { Button, InputItem, Flex, Toast } from 'antd-mobile-rn';
import LinearGradient from 'react-native-linear-gradient';

export interface UserLogInfo {
    phone: String;
    password: String;
}

function successToast() {
    Toast.info('Login Success!', 1)
};


export default class SignInScreen extends Component {
    
    state = {
        user: {
            phone: '',
            password: '',
        }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('token', 'abc');
        (this.props as any).navigation.navigate('App');
    };
    render() {
        return (
            <View style={styles.bg}>
                <View style={styles.inputArea}>
                    <InputItem type="phone" style={styles.input} defaultValue={this.state.user.phone} placeholder="请输入手机号" onChange={ value => { this.setState({ phone: value }) }}></InputItem>
                    <InputItem type="password" style={styles.input} defaultValue={this.state.user.password} placeholder="请输入密码" onChange={ value => { this.setState({ password: value }) }}></InputItem>
                </View>
                <View style={styles.inputArea}>
                    <Text onPress={ successToast } style={styles.forgetPsw}>forget password</Text>
                </View>
                <Button style={styles.btn} type="primary" onClick={ () => this._signInAsync()}>登录</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputArea: {
        width: '85%',
        padding: 10,
    },
    input: {
        marginTop: 25,
    },
    btnArea: {
        width: '80%',
    },
    forgetPsw: {
        textAlign: 'right',
        color: '#D5D2D2',
    },
    btn: {
        width: '76%',
        marginLeft: 15,
        marginTop: 20,
    }
})