import React, { Component } from 'react';
import { StatusBar, View, DeviceEventEmitter } from 'react-native';
import { createAppContainer, createBottomTabNavigator, NavigationActions, NavigationContainerComponent, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './Views/Login';
import Home from './Views/Home';
import AuthLoadingScreen from './Views/AuthLoadingScreen';
import Contacts from './Views/Contacts';
import { Button } from 'antd-mobile-rn';

const AppStack = createStackNavigator(
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
        Contacts: {
            screen: Contacts,
            navigationOptions: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', 'Contacts'),
                    headerRight: (
                        <Button onClick={navigation.getParam('count')}>+1</Button>
                    )
                }
            }
        }
    },
    {
        initialRouteName: 'Home',
    }
)

/**
 * 登陆验证
 */
const AuthStack = createStackNavigator(
    {
        SignIn: {
            screen: Login,
            navigationOption: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', 'please Sign in...')
                }
            }
        },
    },
    {
        initialRouteName: 'SignIn',
    }
)

/**
 * tab页
 */
// AppStack.navigationOptions = (
//     {
//         Home: {
//             screen: Home,
//         },
//         Contacts: {
//             screen: Contacts,
//         }
//     }
// )

/**
 * 容器
 */
const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
export default AppContainer;