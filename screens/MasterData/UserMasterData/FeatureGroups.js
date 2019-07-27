import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import styles from './styles/FeaturesGroup';
import { Ionicons } from '@expo/vector-icons';

export default class Featuregroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      featureGroups: '',
      featureDescription:'',
      dataSource: [],
    }
  };

  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>ID</Text>
        <Text style={styles.headtext2}>FeatureGroups</Text>
        <Text style={styles.headtext2}>Description</Text>
      </View>
    );
  }

  renderItem = ({ item }) => {
    let i=0;
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{++i}</Text>
        <Text style={styles.textsty2}>{item.features}</Text>
        <Text style={styles.textsty2}>{item.featuresDescription}</Text>
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
                <Text style={styles.dropLabel}>Features</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Email Groups'
                  placeholderTextColor='#545b66'
                  value={this.state.errorName}
                  onChangeText={(emailgroups) => this.setState({ emailgroups })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Description</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Email Groups'
                  placeholderTextColor='#545b66'
                  value={this.state.errorName}
                  onChangeText={(emailgroups) => this.setState({ emailgroups })}
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
