import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import styles from './styles/PreventtiveMaintenanceData';
import { Ionicons } from '@expo/vector-icons';

export default class Userroles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inspectionItem: '',
      requirement: '',
      required:'',
      dataSource: [],
    }
  };

  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>SlNo</Text>
        <Text style={styles.headtext2}>Inspection Item</Text>
        <Text style={styles.headtext2}>Requirement</Text>
        <Text style={styles.headtext2}>Required</Text>
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{item.slNo}</Text>
        <Text style={styles.textsty2}>{item.inspectionItem}</Text>
        <Text style={styles.textsty2}>{item.requirement}</Text>
        <Text style={styles.textsty2}>{item.required}</Text>
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
                <Text style={styles.dropLabel}>Inspection:</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Inspection Item'
                  placeholderTextColor='#545b66'
                  value={this.state.inspectionItem}
                  onChangeText={(inspectionItem) => this.setState({ inspectionItem })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Require</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Requirement'
                  placeholderTextColor='#545b66'
                  value={this.state.requirement}
                  onChangeText={(requirement) => this.setState({ requirement })}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Required</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  placeholder='Required'
                  placeholderTextColor='#545b66'
                  value={this.state.required}
                  onChangeText={(required) => this.setState({ required })}
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
