import React from 'react'
import { createStackNavigator, createAppContainer,withNavigation } from 'react-navigation';
import { Card, Badge, Button, Block, Text } from '../../components';
import { theme, mocks } from '../../constants';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native'

import Browse from '../Browse';

import ProductionNavigator from './Navigation/ProductionNavigator';
import DispatchNavigator from './Navigation/DispatchNavigator';
import ToolNavigator from './Navigation/ToolNavigator';
import MasterdataNavigator from './Navigation/MasterdataNavigator';

import MyHeaderButton from '../Routes/Records2/MyHeaderButton';

import UserCategory from '../MasterData/UserMasterData/UserCategory'
import UserRoles from '../MasterData/UserMasterData/UserRoles'
import EmailNotification from '../MasterData/UserMasterData/EmailNotification'
import FeatureGroups from '../MasterData/UserMasterData/FeatureGroups'
import PageAccess from '../MasterData/UserMasterData/PageAccess'
import ControlElement from '../MasterData/UserMasterData/ControlElement'

import ProductionLine from '../MasterData/ProdMasterData/ProductionLine'
import ToolData from '../MasterData/ProdMasterData/ToolData'
import VariantData from '../MasterData/ProdMasterData/VariantData'
 
import PreventiveMaintenanceData from '../MasterData/MaintenanceMasterData/PreventiveMaintenanceData'
import Breakdownfailure from '../MasterData/MaintenanceMasterData/Breakdownfailure'
import ToolReplacementChecklist from '../MasterData/MaintenanceMasterData/ToolReplacementChecklist'

import AddEdit1 from '../Admin/AddEdit1'
import Simplemodal from '../Routes/modals/Simplemodal'
const MyButtonWithNavigation = withNavigation(MyHeaderButton);

export const Navigator = createStackNavigator({
  Browse: {
    screen: Browse,
    navigationOptions: (navigation) => ({
      title: 'Home',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        color: 'darkblue',
        marginLeft: '19%'
      },
      headerRight: <MyButtonWithNavigation />
    }),
  },

  Masterdata: {
    screen: MasterdataNavigator,
    navigationOptions: () => ({
      title: 'Master Data',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        color: 'darkblue'
      },
    })
  },

  // UserManagement: {
  //   screen: Modalexample,
  //   navigationOptions: () => ({
  //     title: 'Add User',
  //     headerTitleStyle: {
  //       flex: 1,
  //       textAlign: 'center',
  //       fontSize: 22,
  //       color: 'darkblue'
  //     },
  //   })
  // },
  Production: {
    screen: ProductionNavigator,
    navigationOptions: () => ({
      title: 'Production',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        color: 'darkblue'
      },
    }),
  },
  Dispatch: {
    screen: DispatchNavigator,
    navigationOptions: () => ({
      title: 'Dispatch',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        color: 'darkblue'
      },
    })
  },
  ToolMaintenance: {
    screen: ToolNavigator,
    navigationOptions: () => ({
      title: 'Tool Maintenance',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        color: 'darkblue'
      },
    }),
  },
  
  // Simplemodal:{screen: Simplemodal},
  AddEdit1:{screen: AddEdit1},

  UserCategory: {screen: UserCategory},
  UserRoles: {screen: UserRoles},
  EmailNotification: {screen: EmailNotification},
  FeaturesGroup: {screen: FeatureGroups},
  PageAccess: {screen: PageAccess},
  ControlElement: {screen: ControlElement},

  ProductionLine: {screen: ProductionLine},
  ProductionTool: {screen: ToolData},
  ProductionVariant: {screen: VariantData},

  PreventiveMaintenance: {screen: PreventiveMaintenanceData},
  BreakdownMaintenance: {screen: Breakdownfailure},
  ToolReplacement: {screen: ToolReplacementChecklist},

})

export default createAppContainer(Navigator);