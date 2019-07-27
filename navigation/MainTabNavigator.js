import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Admin/AddEdit';
import Productionplan from '../screens/TMPUS/Productionplan';
// import productionreport from '../screens/TMPUS/Productionreport';
import { theme } from '../constants';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
// },{
//     defaultNavigationOptions: {
//       headerStyle: { 
//         height: theme.sizes.base * 4,
//         backgroundColor: theme.colors.white, // or 'white
//         borderBottomColor: "transparent",
//         elevation: 0, // for android
//       },
//     }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ProductionStack = createStackNavigator({
  PPLAN: Productionplan,
});

ProductionStack.navigationOptions = {
  tabBarLabel: 'PPLAN',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  ProductionStack,
});
