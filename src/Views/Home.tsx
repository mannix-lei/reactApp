import React, { Component } from 'react';
import { View, AsyncStorage, StyleSheet, ScrollView, Image, findNodeHandle } from 'react-native';
import { Button, Tabs, Toast } from 'antd-mobile-rn';
import { BottomNavigation, Text } from 'react-native-paper';
import { BlurView, VibrancyView } from 'react-native-blur';
    
export default class HomeScreen extends Component {

    state = {
        viewRef: null,
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    successToast() {
        Toast.success('Loading Success!', 1);
    }

    componentDidMount() {
        this.successToast();
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        (this.props as any).navigation.navigate('Auth');
    }

    render() {

        const { navigate } = (this.props as any).navigation;

        return (
            <View style={styles.bg}>
                <Image
                    ref={(img) => { this.backgroundImage = img}}    
                    source={require('../img/bg.jpg')}
                    style={styles.absolute}
                    onLoadEnd={this.imageLoaded.bind(this)}
                    />
                <BlurView
                    style={styles.absolute}
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={10}
                    />
                <Image style={{ width: 240, height: 80, position: 'absolute', top: 70, }} source={ require('../img/logo.png') } />
                <View style={styles.btnGroup}>
                    <Button style={ styles.naviView } onClick={ () => navigate('Project')}>
                        <Text style={ styles.title }>项目列表</Text>
                    </Button>
                    <Button style={ styles.naviView } onClick={ () => navigate('Contact')}>
                        <Text style={ styles.title }>人员列表</Text>
                    </Button>
                    <Button style={ styles.naviView }>
                        <Text style={ styles.title }>地址列表</Text>
                    </Button>
                    <Button style={ styles.naviView }>
                        <Text style={ styles.title }>关于我们</Text>
                    </Button>
                    <Button style={ styles.naviView }>
                        <Text style={ styles.title }>公司简介</Text>
                    </Button>
                    <Button style={ styles.naviView }>
                        <Text style={ styles.title }>个人设置</Text>
                    </Button>
                </View>
          </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    bg: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        flexWrap: 'wrap',  
    },
    naviView: {
        borderColor: 'white', 
        borderWidth: 2, 
        width: 100, 
        height: 100, 
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',

    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
    title: {
        fontSize: 15,
        color: '#6699FF',
    },
    btnGroup: {
        marginTop: 240,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        flexWrap: 'wrap',
    }
});