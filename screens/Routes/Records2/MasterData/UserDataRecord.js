import React, { Component } from 'react';
import { StatusBar, Platform,Image } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import  Browse1 from '../../../MasterData/Browse1';
import styles from './styles/UserDataRecord';

const isAndroid = Platform.OS === 'android';

export default class UserDataRecord extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <MIcon
                name="account-group"
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
            <Browse1 navigation={this.props.navigation} />
        );
    }
}
