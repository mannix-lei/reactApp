import React, { Component } from 'react';
import { View, Text, ScrollView,  }  from 'react-native';
import { NavBar, Icon, Button } from 'antd-mobile-rn';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ fles: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>this is home screen</Text>
        <Text>Home Screen</Text>
        <Button onClick={() => this.props.navigation.navigate('Details', { itemId: '欢迎光临', otherParam: 'anything u want here'})}>FOO</Button>
      </View>
    );
  }
}

class DetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    alert(this.props.navigation.state.params.itemId)
  }

  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: { itemId }</Text>
        <Text>otherParam: { otherParam }</Text>
        <Button onClick={() => this.props.navigation.navigate('third')}>BAR</Button>
        <Button onClick={() => this.props.navigation.navigate('Home')}>home</Button>
        <Button onClick={() => this.props.navigation.goBack()}>go back</Button>
      </View>
    )
  }
}

class ThirdScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', width: '100%', height: '100%' }}>
        <Text>this is third screen.</Text>
        <Button onClick={ () => this.props.navigation.popToTop()}>to top</Button>
        <Button onClick={ () => this.props.navigation.push('third')}>to third</Button>
        <Button onClick={() => this.props.navigation.goBack()}>go back</Button>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    third: ThirdScreen
  },
  {
    initialRouteName: 'Home'
  }
);

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
//   third: ThirdScreen,
// })

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Profile: ProfileScreen,
// })

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeStack,
//   Settings: SettingsStack,
// })

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
// // export default class HelloWorldApp extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }


//   render() {
//     return (
//       <ScrollView style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
//         <View>
//         {/* <NavBar
//             mode="light"
//             icon={<Icon type="left"/>}
//             onLeftClick={() => console.info('onLeftClick')}
//             rightContent={[
//               <Icon key="0" type="search" style={{ marginRight: '16px'}} />,
//               <Icon key="1" type="ellipsis" />
//             ]}>
//         </NavBar> */}
//         <Text style={{ fontSize: 20, textAlign: 'center', }}>Mannix_Lei</Text>
//         <Button>Click me!</Button>
//       </View>
//       </ScrollView>
//     )
//   }
// }
