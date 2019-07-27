import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import styles from './styles/UserCategory';
import { Ionicons } from '@expo/vector-icons';

export default class Usercategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slNo: '',
      categoryName: '',
      dataSource:[],
    }
  };


  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>SL NO</Text>
        <Text style={styles.headtext2}>Category Name</Text>
      </View>
    );
}

renderItem = ({ item }) => {
  let i=0;
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{++i}</Text>
        <Text style={styles.textsty2}>{item.category}</Text>
      </View>
    );
}

renderSeparator = () => {
    return (
      <View
        style={{
            height: 1,
            width: '100%',
            backgroundColor: "black"
        }}>
      </View>
    );
}

componentDidMount() {
  fetch("http://192.168.43.90:3001/api/usersaccess")
      .then((response) => response.json())
      .then((res) => {
    console.log("data"+res.user);
          this.setState({
              dataSource: res.user
          });
      })
      .catch((error) => {
          console.error(error);
      })
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.BreakdownScreen}>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>SL No</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='SL NO'
                  placeholderTextColor='#545b66'
                  value={this.state.slNo}
                  onChangeText={(slNo) => this.setState({ slNo })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Category</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Category Name'
                  placeholderTextColor='#545b66'
                  value={this.state.errorName}
                  onChangeText={(categoryName) => this.setState({ categoryName })}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonScreen}>
            <View style={styles.savebuttonScreen}>
              <TouchableOpacity
                style={styles.savebutton}
                onPress={this.addnewuser}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flatlistScreen}>
            <FlatList
              ListHeaderComponent={this.renderItem1}
              stickyHeaderIndices={[0]}
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={(item) => item._id}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </View>
      </View>
    );
  }
}
