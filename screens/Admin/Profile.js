import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,StyleSheet,Dimensions} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width: Dimensions.get('window').width,
        modalVisible: false,
    };
    Dimensions.addEventListener('change', (e) => {
        this.setState(e.window);
    })
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
        onPress={() => {
          this.setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight> */}
    </View>
    );
  }
}
const styles = StyleSheet.create({
  modal:{
      height:'50%',
      marginTop:'6%',
     // paddingTop:10,
      alignSelf:'center',
      marginLeft:'26%',
     // alignItems:'center',
      textAlign: 'center',
      //justifyContent:'center',
      backgroundColor:'red',
      borderRadius:5,
  },
})
