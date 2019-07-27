import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import styles from './styles/VariantData';
import { Ionicons } from '@expo/vector-icons';

export default class Userroles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variantId: '',
      variantName: '',
      cycleTime:'',
      isActive:'',
      dataSource: [],
    }
  };

  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>SlNo</Text>
        <Text style={styles.headtext1}>Variant Id</Text>
        <Text style={styles.headtext2}>Variant Name</Text>
        <Text style={styles.headtext2}>Cycle Time</Text>
        <Text style={styles.headtext1}>Active</Text>
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{item.slNo}</Text>
        <Text style={styles.textsty2}>{item.variantId}</Text>
        <Text style={styles.textsty2}>{item.variantName}</Text>
        <Text style={styles.textsty2}>{item.cycleTime}</Text>
        <Text style={styles.textsty2}>{item.isActive}</Text>
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.BreakdownScreen}>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Variant Id</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Variant Id'
                  placeholderTextColor='#545b66'
                  value={this.state.variantId}
                  onChangeText={(variantId) => this.setState({ variantId })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>VariantNM</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Variant Name'
                  placeholderTextColor='#545b66'
                  value={this.state.variantName}
                  onChangeText={(variantName) => this.setState({ variantName })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Cycle Time</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Cycle Time'
                  placeholderTextColor='#545b66'
                  value={this.state.cycleTime}
                  onChangeText={(cycleTime) => this.setState({ cycleTime })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>IsActive</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='IsActive'
                  placeholderTextColor='#545b66'
                  value={this.state.isActive}
                  onChangeText={(isActive) => this.setState({ isActive })}
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
            <FlatList horizontal={true}
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
