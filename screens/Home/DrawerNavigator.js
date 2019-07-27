import React, { Component } from "react";
import {
    Dimensions,
} from "react-native";
import HomeScreen from './HomeScreen';
import MenuDrawer from './MenuDrawer';
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
//import styles from './styles/DrawerNavigator';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}
const AppDrawerNavigator = new createDrawerNavigator({
    HomeScreen: { screen: HomeScreen }
},
DrawerConfig
);

const DrawerNavigator = createAppContainer(AppDrawerNavigator);
export default DrawerNavigator;
