import React, { Component } from 'react';
import { StatusBar, View, DeviceEventEmitter, Image, AsyncStorage } from 'react-native';
import { 
    createAppContainer, 
    createBottomTabNavigator, 
    NavigationActions, 
    NavigationContainerComponent, 
    createStackNavigator, 
    createSwitchNavigator, 
    HeaderBackButton} from 'react-navigation';
import Login from './Views/Login';
import Home from './Views/Home';
import AuthLoadingScreen from './Views/AuthLoadingScreen';
import SignInScreen from './Views/SignInScreen';
import PersonalSetting from './Views/PersonalSetting';
import ProjectList from './Views/ProjectList';
import Contacts from './Views/Contacts';

function logOut(params: any) {
    AsyncStorage.clear();
    params.navigate('Auth');
}

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }: any) => {
                return {
                    // drawerLabel: 'Home',
                    // drawerIcon: ({ tintColor }: any) => {
                    //     <Image source={require('./img/bg.jpg')}
                    //     style={[{width: 24, height: 24 }, { tintColor: tintColor }]} />
                    // },
                    title: navigation.getParam('routeName', '首页'),
                }
            }
        },
        Project: {
            screen: ProjectList,
            navigationOptions: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', '项目列表')
                }
            }
        },
        Contact: {
            screen: Contacts,
            navigationOptions: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', '人员列表')
                }
            }
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7C85F8',
            },
            headerTintColor: '#fff',
        }
    }
);
const SettingStack = createStackNavigator(
    {
        Setting: {
            screen: PersonalSetting,
            navigationOptions: ({ navigation }: any) => {
                return {
                    title: navigation.getParam('routeName', '设置'),
                }
            }
        },
    }
)

const AppStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Setting: SettingStack,
    },
    {
        initialRouteName: 'Home',
    }
)

const AuthStack = createStackNavigator(
    {
        Login: Login,
        SignIn: SignInScreen,
    },
    {
        initialRouteName: 'Login',
    }
)

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AppLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AppLoading',
    }
))

export default AppContainer;