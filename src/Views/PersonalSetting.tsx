import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class PersonalSetting extends Component {

    render() {
        return (
            <View style={styles.bg}>
                <Text>this is personalSetting</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    }
})