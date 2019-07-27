import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import styles from './styles/ProductionLine';
import { Ionicons } from '@expo/vector-icons';

export default class Userroles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineid: '',
      lineName: '',
      cycleTime:'',
      isActive:'',
      dataSource: [],
    }
  };

  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>SlNo</Text>
        <Text style={styles.headtext1}>LineID</Text>
        <Text style={styles.headtext2}>Line Name</Text>
        <Text style={styles.headtext2}>Cycle Time</Text>
        <Text style={styles.headtext1}>isActive</Text>
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{item.slNo}</Text>
        <Text style={styles.textsty2}>{item.lineid}</Text>
        <Text style={styles.textsty2}>{item.lineName}</Text>
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
                <Text style={styles.dropLabel}>Line ID:</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Line Id'
                  placeholderTextColor='#545b66'
                  value={this.state.lineid}
                  onChangeText={(lineid) => this.setState({ lineid })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Line Name</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Line Name'
                  placeholderTextColor='#545b66'
                  value={this.state.lineName}
                  onChangeText={(lineName) => this.setState({ lineName })}
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
                  value={this.state.slNo}
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
