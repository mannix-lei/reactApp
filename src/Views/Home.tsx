import React, { Component } from 'react';
import { View, AsyncStorage, StyleSheet, ScrollView } from 'react-native';
import { NavigationActions, NavigationEvents } from 'react-navigation';
import { Button, Tabs } from 'antd-mobile-rn';
import { BottomNavigation, Text } from 'react-native-paper';


// const renderContent = (tab: any, index: number) => {
//     const style = {
//         paddingVertical: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,
//         backgroundColor: '#ddd',
//     };
//     const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => {
//         return (
//             <View key={`${index}_${i}`} style={style}>
//                 <Text>
//                     {tab.title} - {i}
//                 </Text>
//             </View>
//         )
//     });

//     return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>
// }


export default class HomeScreen extends Component {

    state = {
        Pending: 10,
        serving: 10,
        finished: 20,
        canceled: 5,
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