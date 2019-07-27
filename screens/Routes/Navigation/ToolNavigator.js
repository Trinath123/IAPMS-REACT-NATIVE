import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator,createAppContainer } from 'react-navigation'
import Breakdown from '../Records2/BreakdownRecord';
import Preventive from '../Records2/PreventiveRecord';
import Tool from '../Records2/ToolRecords';
import History from '../Records2/ToolHistoryRecord';
//import TabBarIcon from '../TabBarIcon';
import Colors from '../../../constants/Colors';


export const ToolNavigator= createBottomTabNavigator({
  Preventive:{
    screen:Preventive
  },
  Breakdown:{
    screen:Breakdown
  },
  Tool:{
    screen:Tool
  },
  History:{
    screen:History
  },

  // Breakdown:{
  //   screen:Breakdown, 
  //   navigationOptions: () => ({
  //     tabBarLabel:'Break',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Image
  //           source={require("../../assets/icons/dashboard.png")}
  //           style={{width: 25, height: 25, resizeMode: 'contain'}}
  //       />
  //   )
  //   }),
  // },
  // Preventive:{
  //   screen:Preventive,
  //   navigationOptions: () => ({
  //     tabBarLabel:'Preventive'
  //   }),
  // },
},
{
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
      headerTitleStyle: {
          fontFamily: 'montserratBold',
      },  
      headerTintColor: Colors.$white,
      headerStyle: {
          backgroundColor: Colors.$mediumblue,
      },
      showLabel: true,
      showIcon: true,
      inactiveTintColor: Colors.$darkblue,
      activeTintColor:'red',
      indicatorStyle: {
          backgroundColor: 'red',
      },
      style: {
          backgroundColor: Colors.$lightgrey,
      },
      pressColor: 'red'
  }

});
export default createAppContainer(ToolNavigator);
