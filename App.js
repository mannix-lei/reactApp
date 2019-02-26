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
        <Button title="uuu" onClick={() => this.props.navigation.navigate('Details')}>FOO</Button>
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="uuu" onClick={() => this.props.navigation.navigate('third')}>BAR</Button>
      </View>
    )
  }
}

class ThirdScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', width: '100%', height: '100%' }}>
        <Text>this is third screen.</Text>
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
