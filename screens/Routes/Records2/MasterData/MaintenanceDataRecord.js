import React, { Component } from 'react';
import { StatusBar, Platform,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  Browse3 from '../../../MasterData/Browse3';
import styles from './styles/MaintenanceDataRecord';

const isAndroid = Platform.OS === 'android';

export default class MaintenanceDataRecord extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Ionicons
                name="md-construct"
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
            <Browse3 navigation={this.props.navigation} />
        );
    }
}
