import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, NavigationContainerComponent, NavigationActions } from 'react-navigation';
import { DeviceEventEmitter, View, Text } from 'react-native';
import AppContainer from './src/router';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: 'yellow',
    background: 'blue',
    text: '#9966FF'
  }
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  )
}

AppRegistry.registerComponent('main', () => Main);