import React, { Component } from 'react';
import { View, AsyncStorage, StyleSheet, ScrollView } from 'react-native';
import { NavigationActions, NavigationEvents } from 'react-navigation';
import { Button, Tabs, Toast } from 'antd-mobile-rn';
import { BottomNavigation, Text } from 'react-native-paper';
import ProjectServices from '../server/ProjectList';

    
export default class ProjectList extends Component {

    state = {
        Pending: 10,
        serving: 10,
        finished: 20,
        canceled: 5,
    }

    componentDidMount() {
        ProjectServices.initProjectList();
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        (this.props as any).navigation.navigate('Auth');
    }

    render() {

        const tabs = [
            {
                title: '全部',
            },
            {
                title: '待服务' + this.state.Pending,
            },
            {
                title: '服务中' + this.state.serving,
            },
            {
                title: '完成' + this.state.finished,
            },
            {
                title: '取消' + this.state.canceled,
            }
        ];
    
        return (
            <View style={ styles.bg }>
                <Tabs tabs={tabs}>
                    <View style={ styles.all }>
                        <Text style={ styles.allContent }>
                            日常保洁（北京898体验店）
                        </Text>
                    </View>
                    <View>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Third Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Fourth Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Fifth Tab</Text>
                    </View>
                </Tabs>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    all: {
       alignItems: 'center',
       marginTop: 10,
    },
    allContent: {
        textAlign: 'center',
    }
});