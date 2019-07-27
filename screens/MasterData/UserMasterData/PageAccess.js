import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Keyboard,
  TextInput
} from 'react-native';
import styles from './styles/PageAccess';
import { Ionicons } from '@expo/vector-icons';

export default class Pageaccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: '',
      userCategory: '',
      userRoles: '',
      feature: ['1', '2', '3'],
      isFeature: false,
      userCat: ['BoschUser'],
      isCat: false,
      userRole: ['Operator', 'Mechanical', 'Electrical'],
      isRole: false,
      dataSource:[]
    }
    this.selectfeature = this.selectfeature.bind(this);
    this.selectcategory = this.selectcategory.bind(this);
    this.selectroles = this.selectroles.bind(this);
  };

  selectfeature(fet) {
    this.setState({ features: fet, isFeature: false });
  }
  selectcategory(cat) {
    this.setState({ userCategory: cat, isCat: false });
  }
  selectroles(cat) {
    this.setState({ userRoles: cat, isRole: false });
  }

  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>ID</Text>
        <Text style={styles.headtext2}>Feature</Text>
        <Text style={styles.headtext2}>Category</Text>
        <Text style={styles.headtext2}>Screen</Text>
        <Text style={styles.headtext2}>Access</Text>
      </View>
    );
  }

  renderItem = ({ item }) => {
    let i=0;
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{++i}</Text>
        <Text style={styles.textsty2}>{item.features}</Text>
        <Text style={styles.textsty2}>{item.category}</Text>
        <Text style={styles.textsty2}>{item.screens}</Text>
        <Text style={styles.textsty2}>{item.notifications}</Text>
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
                <Text style={styles.dropLabel}>Feature</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  placeholderTextColor='#545b66'
                  value={this.state.features}
                  onChangeText={(features) => this.setState({ features })}
                  onFocus={() => this.setState({ isFeature: true })}
                />
                <TouchableOpacity>
                  <Ionicons style={styles.dropicons}
                    name='md-arrow-dropdown'
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isFeature
              ?
              <View style={styles.dropScreen2}>
                <View style={styles.dropLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.feature.map((fet, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.dropButton}
                      onPress={() => this.selectfeature(fet)}>
                      <Text style={styles.droptext}>{fet}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              :
              null
            }
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Category:</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  placeholderTextColor='#545b66'
                  value={this.state.errorName}
                  onChangeText={(userCategory) => this.setState({ userCategory })}
                  onFocus={() => this.setState({ isCat: true })}
                />
                <TouchableOpacity>
                  <Ionicons style={styles.dropicons}
                    name='md-arrow-dropdown'
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isCat
              ?
              <View style={styles.dropScreen3}>
                <View style={styles.dropLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.userCat.map((cat, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.dropButton2}
                      onPress={() => this.selectcategory(cat)}>
                      <Text style={styles.droptext}>{cat}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              :
              null
            }
          </View>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>User Roles:</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  placeholderTextColor='#545b66'
                  value={this.state.userRoles}
                  onChangeText={(userRoles) => this.setState({ userRoles })}
                  onFocus={() => this.setState({ isRole: true })}
                />
                <TouchableOpacity>
                  <Ionicons style={styles.dropicons}
                    name='md-arrow-dropdown'
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isRole
              ?
              <View style={styles.dropScreen3}>
                <View style={styles.dropLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.breakError.map((role, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.dropButton2}
                      onPress={() => this.selectcategory(role)}>
                      <Text style={styles.droptext}>{role}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              :
              null
            }
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