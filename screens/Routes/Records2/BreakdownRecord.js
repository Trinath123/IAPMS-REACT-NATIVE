import React, { Component } from 'react';
import { StatusBar, Platform,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import  Tool from '../Records/Breakdown';
import styles from './styles/BreakdownRecord';

const isAndroid = Platform.OS === 'android';

export default class ToolRecords extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="cogs"
                size={32}
                color={tintColor}
                style={styles.myResultsIcone}
            />
        //     <Image
        //     source={require("../../../assets/icons/plan.png")}
        //     style={{width:100, height: 40, resizeMode: 'contain',tintColor: 'red'}}
        // />
        ),
        headerTitleStyle: {
            fontWeight: 900,
            fontFamily: 'montserratBold'
        },
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            if (isAndroid) { StatusBar.setBackgroundColor('#fff'); }
        });
    }

    render() {
        return (
            <Tool navigation={this.props.navigation} />
        );
    }
}
