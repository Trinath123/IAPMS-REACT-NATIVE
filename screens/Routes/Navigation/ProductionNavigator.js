import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator,createAppContainer } from 'react-navigation'
import Productionplan from '../../TMPUS/Productionplan';
import Productionreport from '../../TMPUS/Productionreport';
import Productionchart from '../../TMPUS/Productionchart'

//import TabBarIcon from '../TabBarIcon';

export const ProductionNavigator= createBottomTabNavigator({
  Productionplan:{
    screen:Productionplan,
    navigationOptions: () => ({
      tabBarLabel:'Plan',
      tabBarOptions: {
        activeTintColor: '#e91e63',
       // activeBackgroundColor:'red',
      labelStyle: {
          fontSize:12,
        },
      },
      tabBarIcon: () => (
        <Image
            source={require("../../../assets/icons/plan.png")}
            style={{width:100, height: 40, resizeMode: 'contain'}}
        />
        
     )
    }),
  },
  Productionreport:{
    screen:Productionreport,
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
            style={{width: 100, height: 35, resizeMode: 'contain'}}
        /> 
     )
    }),
  },
  Productionchart:{
    screen:Productionchart,
    navigationOptions: () => ({
      tabBarLabel:'Chart',
      tabBarOptions: {
        activeTintColor: '#e91e63',
       // activeBackgroundColor:'red',
      labelStyle: {
          fontSize:12,
        },
      },
      tabBarIcon: () => (
        <Image
            source={require("../../../assets/icons/chart.png")}
            style={{width: 100, height: 35, resizeMode: 'contain'}}
        />
        
     )
    }),
  }
});
export default createAppContainer(ProductionNavigator);