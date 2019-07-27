import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator,createAppContainer } from 'react-navigation'
import Dispatchmonitoring from '../../TMPUS/Dispatchmonitoring';
import Dispatchreport from '../../TMPUS/Dispatchreport';

//import TabBarIcon from '../TabBarIcon';

export const DispatchNavigator= createBottomTabNavigator({
  Dispatchmonitoring:{
    screen:Dispatchmonitoring,
    navigationOptions: () => ({
      tabBarLabel:'Monitoring',
      tabBarOptions: {
        activeTintColor: '#e91e63',
       // activeBackgroundColor:'red',
      labelStyle: {
          fontSize:12,
        },
      },
      tabBarIcon: () => (
        <Image
            source={require("../../../assets/icons/monitoring.png")}
            style={{width:100, height: 45, resizeMode: 'contain'}}
        />
        
     )
    }),
  },
  Dispatchreport:{
    screen:Dispatchreport,
    navigationOptions: () => ({
      tabBarLabel:'Report',
      tabBarOptions: {
        activeTintColor: '#e91e63',
       // activeBackgroundColor:'red',
      labelStyle: {
          fontSize:12,
        },
      },
      tabBarIcon: () => (
        <Image
            source={require("../../../assets/icons/report.png")}
            style={{width:100, height: 40, resizeMode: 'contain'}}
        />
        
     )
    }),
  }
});
export default createAppContainer(DispatchNavigator);