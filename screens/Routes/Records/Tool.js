import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import Toolreplacement from '../../TMPUS/Toolreplacement'
import Toolreport from '../../TMPUS/Toolreport'
import styles from './style/Tool'
export default class Tool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resSelect: false,
      dateBackColor:'blue',
      dateTextColor:'white',
      testBackColor:'white',
      testTextColor:'blue'
    };
    this.resTicketButPressed = this.resTicketButPressed.bind(this);
    this.resReportButPressed = this.resReportButPressed.bind(this);
  }
  resReportButPressed() {
    this.setState({
      resSelect: true,
      dateBackColor:'white',
      dateTextColor:'blue',
      testBackColor:'blue',
      testTextColor:'white'
    });
  }
  resTicketButPressed() {
    this.setState({
      resSelect: false,
      dateBackColor:'blue',
      dateTextColor:'white',
      testBackColor:'white',
      testTextColor:'blue'
    })
  }
  render() {
    // const {replac, history} = this.props.navigation.state.params;
    return (
      <View style={styles.rootContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.resButContainer}>
          <View style={styles.resButtcontainer}>
            <TouchableOpacity
              style={[styles.resButDate,
                {backgroundColor:this.state.dateBackColor}]}
              onPress={this.resTicketButPressed}
            >
              <Text 
                style={[styles.resButDText,
                {color:this.state.dateTextColor}]}
              >
                Tickets
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.resButTText,
                {backgroundColor:this.state.testBackColor}]}
              onPress={this.resReportButPressed}
            >
              <Text 
                style={[styles.resButtTest,
                  {color:this.state.testTextColor}]}
              >
                Report
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resDetContainer}>
          {this.state.resSelect
            ?
            <Toolreport/>
            :
            <Toolreplacement/>
          }
        </View> 
      </View>
    )
  }
}
