import React, { Component } from 'react';
import { StatusBar, View, DeviceEventEmitter } from 'react-native';
import { createAppContainer, createBottomTabNavigator, NavigationActions, NavigationContainerComponent, createStackNavigator } from 'react-navigation';
import Login from './Views/Login';
import Home from './Views/Home';
import Contacts from './Views/Contacts';

const MainNavigator = createStackNavigator(
    {
        Home: { 
            screen: Home,
            navigationOptions: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', 'WeChat'),
                    // headerStyle: {
                    //     backgroundColor: 'green',
                    // },
                    // headerTintColor: 'yellow',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // }
                }
            },
        },
        Login: {
            screen: Login,
            navigationOptions: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', 'Login'),
                }
            }
        },
        Contacts: {
            screen: Contacts,
            navigationOptions: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', 'Contacts'),
                }
            }
        }
    },
    {
        initialRouteName: 'Home',
    }
)

const TabBottomNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
        },
        Login: {
            screen: Login,
        }
    },
    {
        initialRouteName: 'Home',
    }
)

// state = {
//     index: 0,
//     routes: [
//         { key: 'music', title: 'Music', icon: 'queue-music' },
//         { key: 'albums', title: 'Albums', icon: 'albums' },
//         { key: 'recents', title: 'Recents', icon: 'history' },
//     ],
// };
// _handleIndexChange = (index: number) => this.setState({ index });
// _renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
// });

// <BottomNavigation navigationState={this.state} onIndexChange={this._handleIndexChange} renderScene={this._renderScene} />

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;