
import React, {Component} from 'react';
import {  
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './styles/Newpassinfo';

export default class Newpassinfo extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.newpasswordScreen}>
        <View style={styles.topScreen} />
          <View style={styles.headerScreen}>
            <Text style={styles.header}>New Password Information</Text>
          </View>
          <View style={styles.bottomheaderScreen}>
            <Text style={styles.bottomheader}>You have resived this email because you are a member of EVCS</Text>
          </View>
      </View>         
    </View>
  );
}
}


