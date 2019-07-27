import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Simplemodal from '../modals/Simplemodal';
import Colors from '../../../constants/Colors';

export default class MyHeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  }

  render() {
    return (
      <View>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            closeOnClick={true}
            visible={this.state.isModalVisible}
            onRequestClose={() => { this.changeModalVisibility(false) }}
          >
            <TouchableOpacity
              style={styles.container}
              activeOpacity={1}
              onPressOut={() => { this.changeModalVisibility(false) }}
            >
              <Simplemodal 
                changeModalVisibility={this.changeModalVisibility} 
                navigate = {this.props.navigation.navigate}
                />
            </TouchableOpacity>
          </Modal>
        </View>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {
          this.changeModalVisibility(true);
        }}>
          <MIcon
            name="dots-vertical"
            size={30}
            color={Colors.darkblue}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})