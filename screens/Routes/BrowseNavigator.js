import React from 'react'
import { createStackNavigator, createAppContainer,withNavigation } from 'react-navigation';
import { Card, Badge, Button, Block, Text } from '../../components';
import { theme, mocks } from '../../constants';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native'

import ProductionNavigator from './Navigation/ProductionNavigator';
import DispatchNavigator from './Navigation/DispatchNavigator';
import ToolNavigator from './Navigation/ToolNavigator';
import UserCategory from '../MasterData/UserMasterData/UserCategory';


export const BrowseNavigator = createStackNavigator({
  UserCategory: {
    screen: UserCategory,
  },
  // Dispatch: {
  //   screen: DispatchNavigator,
  // },
  // ToolMaintenance: {
  //   screen: ToolNavigator,
  // },
})

export default createAppContainer(BrowseNavigator);