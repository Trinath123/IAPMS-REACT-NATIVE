import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/HomeScreen';

export default class HomeScreen extends Component {
    static navigationOptions ={
        header:null
    }
    render() {
        return (
            <View style={styles.container}>
            <Ionicons
            name="md-menu"
            color="#000000"
            size={32}
            style={styles.menuIcon}
            onPress={() => this.props.navigation.toggleDrawer()}
        />
           
          <Text style={styles.Text}>
            HomeScreen
          </Text>
        </View>
        );
    }
}

