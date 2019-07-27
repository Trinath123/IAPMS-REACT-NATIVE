import React from 'react'
import {createStackNavigator,createSwitchNavigator,createAppContainer} from 'react-navigation'
//import {initializeListener, createReduxBoundAddListener} from 'react-navigation-redux-helpers'

import {Navigator} from './Navigator'
import Login from '../Admin/Login'
import AddEdit from '../Admin/AddEdit'
import Welcome from '../Welcome'
//import Logout from '../Routes/modals/Simplemodal'

const FirstNavigator = createStackNavigator({
  Starts:{screen:Welcome},
 // Logout:{screen:Logout}
});

const AutiNavigator = createStackNavigator({
  Login:{screen:Login},
  AddEdit:{screen:AddEdit}
});
 
export const AppNavigator = createSwitchNavigator({
  First:{screen:FirstNavigator},
  Login:{screen:AutiNavigator},
  Main:{screen:Navigator},
  //Logout:{screen:LogoutNavigator}
})

export default createAppContainer(AppNavigator);