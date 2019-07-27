import React, { Component } from 'react';
import { StatusBar, Platform,Image } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import  Toolhistory from '../../TMPUS/Toolhistory';
import styles from './styles/ToolRecords';

const isAndroid = Platform.OS === 'android';

export default class ToolRecords extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <MIcon
                name="history"
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
            <Toolhistory navigation={this.props.navigation} />
        );
    }
}
