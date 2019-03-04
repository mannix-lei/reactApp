import React, { Component } from 'react';
import { View, AsyncStorage, Text, StyleSheet } from 'react-native';
import { Button, InputItem, Flex } from 'antd-mobile-rn';
import LinearGradient from 'react-native-linear-gradient';

export interface UserLogInfo {
    email: String;
    password: String;
}

export default class SignInScreen extends Component {
    
    state = {
        user: {
            email: '',
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
                    <InputItem style={styles.input} value={this.state.user.email} placeholder="请输入邮箱" onChange={ value => { this.setState({ value }) }}></InputItem>
                    <InputItem style={styles.input} value={this.state.user.password} placeholder="请输入密码" onChange={ value => { this.setState({ value }) }}></InputItem>
                </View>
                <View style={styles.inputArea}>
                    <Text onPress={ () => alert('5')} style={styles.forgetPsw}>forget password</Text>
                </View>
                <Button style={styles.btn} type="primary" onClick={ () => this._signInAsync()}>登录</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'white',
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