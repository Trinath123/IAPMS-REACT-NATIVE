import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Login from '../screens/Admin/Login';
import Forgot from '../screens/Forgot';
import AddEdit from '../screens/Admin/AddEdit';
import Browse from '../screens/Browse';
import AppNavigator from './AppNavigator';


import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,
  Login,
  Forgot,
  AddEdit,
  Browse,
  AppNavigator
}, {
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     height: theme.sizes.base * 4,
    //     backgroundColor: theme.colors.white, // or 'white
    //     borderBottomColor: "transparent",
    //     elevation: 0, // for android
    //   },
    //   headerBackImage: <Image source={require('../assets/icons/back.png')} />,
    //   headerBackTitle: null,
    //   headerLeftContainerStyle: {
    //     alignItems: 'center',
    //     marginLeft: theme.sizes.base * 2,
    //     paddingRight: theme.sizes.base,
    //   },
    //   headerRightContainerStyle: {   
    //     alignItems: 'center',
    //     paddingRight: theme.sizes.base,
    //   },
    // }
  });

export default createAppContainer(screens);