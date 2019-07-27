import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Keyboard,
  TextInput
} from 'react-native';
import styles from './styles/ControlElement';
import { Ionicons } from '@expo/vector-icons';

export default class Controllelement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: '',
      users: '',
      screenNM: '',
      feature: ['1', '2', '3'],
      isFeature: false,
      use: ['BoschUser'],
      isUser: false,
      screens: ['Operator', 'Mechanical', 'Electrical'],
      isScreen: false
    }
    this.selectfeature = this.selectfeature.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.selectScreen = this.selectScreen.bind(this);
  };

  selectfeature(fet) {
    this.setState({ features: fet, isFeature: false });
  }
  selectUser(user) {
    this.setState({ users: user, isUser: false });
  }
  selectScreen(scr) {
    this.setState({ screenNM: scr, isScreen: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.BreakdownScreen}>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropLabelBox}>
                <Text style={styles.dropLabel}>Feature:</Text>
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
                <Text style={styles.dropLabel}>Users:</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  placeholderTextColor='#545b66'
                  value={this.state.users}
                  onChangeText={(users) => this.setState({ users })}
                  onFocus={() => this.setState({ isUser: true })}
                />
                <TouchableOpacity>
                  <Ionicons style={styles.dropicons}
                    name='md-arrow-dropdown'
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isUser
              ?
              <View style={styles.dropScreen3}>
                <View style={styles.dropLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.use.map((user, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.dropButton2}
                      onPress={() => this.selectUser(user)}>
                      <Text style={styles.droptext}>{user}</Text>
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
                <Text style={styles.dropLabel}>Screens:</Text>
              </View>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  placeholderTextColor='#545b66'
                  value={this.state.userRoles}
                  onChangeText={(screenNM) => this.setState({ screenNM })}
                  onFocus={() => this.setState({ isScreen: true })}
                />
                <TouchableOpacity>
                  <Ionicons style={styles.dropicons}
                    name='md-arrow-dropdown'
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isScreen
              ?
              <View style={styles.dropScreen3}>
                <View style={styles.dropLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.screens.map((scr, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.dropButton2}
                      onPress={() => this.selectScreen(scr)}>
                      <Text style={styles.droptext}>{scr}</Text>
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
        </View>
      </View>
    );
  }
}

