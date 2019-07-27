import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Users from '../Records2/MasterData/UserDataRecord';
import Production from '../Records2/MasterData/ProdDataRecord';
import Maintenance from '../Records2/MasterData/MaintenanceDataRecord';
import Colors from '../../../constants/Colors';


export const MasterdataNavigator = createBottomTabNavigator({
  Users: {
    screen: Users
  },
  Production: {
    screen: Production
  },
  Maintenance: {
    screen: Maintenance
  },

},
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      headerTitleStyle: {
        fontFamily: 'montserratBold',
      },
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.mediumblue,
      },
      showLabel: true,
      showIcon: true,
      inactiveTintColor: Colors.darkblue,
      activeTintColor: 'red',
      indicatorStyle: {
        backgroundColor: 'red',
      },
      style: {
        backgroundColor: Colors.lightgrey,
      },
      pressColor: 'red'
    }

  });
export default createAppContainer(MasterdataNavigator);
