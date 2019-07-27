import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Picker,
  CheckBox, Alert, Keyboard,AsyncStorage
} from 'react-native';
import styles from './styles/AddEdit2';
import { Ionicons } from '@expo/vector-icons'

export default class AddEdit2 extends Component {

  static navigationOptions = () => ({
    title: 'Add/Edit User',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 25,
      color: 'darkblue'
    },
  });
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      preventive_maintenance: false,
      breakdown_maintenance: false,
      tool_replacement: false,
      userroles: ['Admin', 'User', 'ClientUser', 'abc', 'hgp', 'ddsss'],
      roles: '',
      isroles: false
    }
    this.selectroles = this.selectroles.bind(this);
  };

  componentDidMount() {
    this._loadinitialState().done();
  }

  _loadinitialState = async () => {
    await AsyncStorage.removeItem('user');
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Edituser');
    }
  }
 
  
  selectroles(cat) {
    const { roles } = this.state;
    this.setState({ roles: cat, isroles: false });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.adduserScreen}>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>FirstName</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="FirstName"
                selectionColor="black"
                underlineColorAndroid={'transparent'}
                onChangeText={(first_name) => this.setState({ first_name })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>LastName</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="LastName"
                selectionColor="black"
                underlineColorAndroid={'transparent'}
                onChangeText={(last_name) => this.setState({ last_name })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>Email</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="Email"
                selectionColor="black"
                underlineColorAndroid={'transparent'}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
          </View>
          <View style={styles.roleCatScreen}>
            <View style={styles.roleScreen}>
              <View style={styles.roleLabelBox}>
                <Text style={styles.roleLabel}>Rloes</Text>
              </View>
              <View style={styles.roleInputBox}>
                <TextInput style={styles.roleTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='roles'
                  value={this.state.roles}
                  selectionColor='black'
                  onChangeText={(roles) => this.setState({ roles })}
                  onFocus={() => this.setState({ isroles: true })}
                  underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity>
                <Ionicons style={styles.dropicons}
                  name='md-arrow-dropdown'
                />
                 </TouchableOpacity>
              </View>
            </View>
            {this.state.isroles
              ?
              <View style={styles.roleScreen2}>
                <View style={styles.roleLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.userroles.map((cat, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.rolesButton}
                      onPress={() => this.selectroles(cat)}
                    >
                      <Text>{cat}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              :
              null
            }
          </View>
          <View style={styles.notificationScreen}>
            <View style={styles.checkboxScreen}>
              <View style={styles.checkbox}>
                <CheckBox value={this.state.checkboxvalue1}
                  onChange={() => this.setState({ checkboxvalue1: !this.state.checkboxvalue1 })}
                />
              </View>
              <View style={styles.checkboxLabelScreen}>
                <Text style={styles.checkboxtextLabel}>Preventive Maintenance</Text>
              </View>
            </View>
            <View style={styles.checkboxScreen}>
              <View style={styles.checkbox}>
                <CheckBox value={this.state.checkboxvalue2}
                  style={styles.checkbox}
                  onChange={() => this.setState({ checkboxvalue2: !this.state.checkboxvalue2 })}
                />
              </View>
              <View style={styles.checkboxLabelScreen}>
                <Text style={styles.checkboxtextLabel}>Breakdown Maintenance</Text>
              </View>
            </View>
            <View style={styles.checkboxScreen}>
              <View style={styles.checkbox}>
                <CheckBox value={this.state.checkboxvalue3}
                  style={styles.checkbox}
                  onChange={() => this.setState({ checkboxvalue3: !this.state.checkboxvalue3 })}
                />
              </View>
              <View style={styles.checkboxLabelScreen}>
                <Text style={styles.checkboxtextLabel}>Tool Replacement</Text>
              </View>
            </View>
          </View>
        <View style={styles.buttonScreen}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.addedit2}>
            <View style={styles.icons}>
              <Ionicons
                name='md-save'
                color='white'
                size={50}
                style={styles.searchIcon}
              />
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  addedit2 = () => {
    const { first_name, last_name, email, password, roles,
           preventive_maintenance, breakdown_maintenance, tool_replacement } = this.state;
    fetch("http://192.168.0.43:3001/api/users/update", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        roles,
        preventive_maintenance,
        breakdown_maintenance,
        tool_replacement
      })
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success == true) {
          alert("You are successfull login");
          AsyncStorage.setItem('user', res.user)
          this.props.navigation.navigate('Edituser');
        }
        else {
          alert(res.message);
        }
      })
      .done();
    }
}

