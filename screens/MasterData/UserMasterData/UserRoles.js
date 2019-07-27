import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import styles from './styles/UserRoles';
import { Ionicons } from '@expo/vector-icons';

export default class Userroles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      userRoles: '',
      dataSource: [],
    }
  };

  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>ID</Text>
        <Text style={styles.headtext2}>User Roles</Text>
      </View>
    );
  }

  renderItem = ({ item,i }) => {
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{++i}</Text>
        <Text style={styles.textsty2}>{item.dataSource.roles}</Text>
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
    let i=0;
    return (
      <View style={styles.container}>
        <View style={styles.BreakdownScreen}>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>ID</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='ID'
                  placeholderTextColor='#545b66'
                  value={this.state.slNo}
                  onChangeText={(id) => this.setState({ id })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>User Roles</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='User Roles'
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
              keyExtractor={(item,i) => item._id}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </View>
      </View>
    );
  }
}
