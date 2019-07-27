import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';

import Navigation from './screens/Routes/AppNavigator';
import { Block } from './components';

const images = [
  require('./assets/icons/dashboard.png'),
  require('./assets/icons/dispatch.png'),
  require('./assets/icons/user.png'),
  require('./assets/icons/masterdata.png'),
  require('./assets/icons/production.png'),
  require('./assets/icons/tool.png'),
  require('./assets/images/illustration.png'),
  require('./assets/images/illustration_1.png'),
  require('./assets/images/illustration_2.png'),
  require('./assets/images/illustration_3.png'),
  require('./assets/images/illustration_4.png'),
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    ); 
  }
}

const styles = StyleSheet.create({
});
