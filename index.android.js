/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  Button
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>navigate('Profile', { name: 'Jane' })}
      />
    );
  }
}

// const App = StackNavigator({
//   Main: {screen: MainScreen},
//   Profile: {screen: ProfileScreen},
// });

export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    // let pic = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // };

    return (
      // <Image source={pic} style={{width: 193, height: 110}} />
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      // <View style={{flex: 1}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      // </View>
      //  <View style={{padding: 10}}>
      //   <TextInput
      //     style={{height: 40}}
      //     placeholder="Type here to translate!"
      //     onChangeText={(text) => this.setState({text})}
      //   />
      //   <Text style={{padding: 10, fontSize: 42}}>
      //     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      //   </Text>
      // </View>
      //  <ScrollView>
      //     <Text style={{fontSize:96}}>Scroll me plz</Text>
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Text style={{fontSize:96}}>If you like</Text>
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Text style={{fontSize:96}}>Scrolling down</Text>
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Text style={{fontSize:96}}>What's the best</Text>
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Text style={{fontSize:96}}>Framework around?</Text>
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Image source={require('./img/favicon.png')} />
      //     <Text style={{fontSize:80}}>React Native</Text>
      //   </ScrollView>
      // <View style={styles.container}>
      //   <FlatList
      //     data={[
      //       {key: 'Devin'},
      //       {key: 'Jackson'},
      //       {key: 'James'},
      //       {key: 'Joel'},
      //       {key: 'John'},
      //       {key: 'Jillian'},
      //       {key: 'Jimmy'},
      //       {key: 'Julie'},
      //     ]}
      //     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      //   />
      // </View>
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','aaaaa','bbb','ccc','dd','eeeee','ffff','gggg','hhhh']},
          ]}
          
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
   container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
   sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
