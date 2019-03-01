import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { NavigationActions, NavigationEvents } from 'react-navigation';
import { Button } from 'antd-mobile-rn';
import { BottomNavigation, Text } from 'react-native-paper';

export default class HomeScreen extends Component {

    _signOutAsync = async () => {
        alert('login out')
        await AsyncStorage.clear();
        (this.props as any).navigation.navigate('Auth');
    }

    render() {
        const { navigate } = (this.props as any).navigation;
        return (
            <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
                <Text>
                    this is home page
                </Text>
                <Button onClick={ () => this._signOutAsync()}>logout</Button>
                <Button onClick={ () => navigate('Contacts', { params: { id: '001', name: 'mannix' } }) }>to Contacts</Button>
                <Button onClick={ () => (this.props as any).navigation.setParams({ routeName: 'Mannix' })}>set routename</Button>
            </View>
        )
    }

}