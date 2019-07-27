import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  CheckBox,
  Alert,
  AsyncStorage
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/AddEdit';

export default class AddEdit extends Component {
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
      password: '',
      roles: '',
      users: '',
      category: '',
      preventive_maintenance: false,
      breakdown_maintenance: false,
      tool_replacement: false,
      isActive: true,
      addRoles: ['Admin', 'User', 'ClientUser', 'abc', 'hgp', 'ddsss'],
      roles: '',
      isRoles: false,
      addUser: ['Admin', 'User', 'ClientUser', 'abc', 'hgp', 'ddsss'],
      users: '',
      isUser: false,
      addCategory: ['Admin', 'User', 'ClientUser', 'abc', 'hgp', 'ddsss'],
      category: '',
      isCategory: false
    }

    this.selectRoles = this.selectRoles.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
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

  selectRoles(role) {
    const { roles } = this.state;
    this.setState({ roles: role, isRoles: false });
  }
  selectUser(user) {
    const { users } = this.state;
    this.setState({ users: user, isUser: false });
  }
  selectCategory(cat) {
    const { category } = this.state;
    this.setState({ category: cat, isCategory: false });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.adduserScreen}>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>
                FirstName
              </Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="FirstName"
                onChangeText={(first_name) => this.setState({ first_name })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>
                LastName
              </Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="LastName"
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
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>
                Password
              </Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="Password"
               secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
          </View>
          <View style={styles.roleCatScreen}>
            <View style={styles.roleScreen}>
              <View style={styles.roleLabelBox}>
                <Text style={styles.roleLabel}>
                  Roles
              </Text>
              </View>
              <View style={styles.roleInputBox}>
                <TextInput style={styles.roleTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  value={this.state.roles}
                  selectionColor='black'
                  onChangeText={(roles) => this.setState({ roles })}
                  onFocus={() => this.setState({ isRoles: true })}
                  />
                <TouchableOpacity>
                  <Ionicons style={styles.dropicons}
                    name='md-arrow-dropdown'
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isRoles
              ?
              <View style={styles.roleScreen2}>
                <View style={styles.roleLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.addRoles.map((role, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.categoryButton}
                      onPress={() => this.selectRoles(role)}
                    >
                      <Text>{role}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              :
              null
            }
          </View>
          <View style={styles.roleCatScreen}>
            <View style={styles.roleScreen}>
              <View style={styles.roleLabelBox}>
                <Text style={styles.roleLabel}>Users</Text>
              </View>
              <View style={styles.roleInputBox}>
                <TextInput style={styles.roleTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  value={this.state.users}
                  selectionColor='black'
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
              <View style={styles.roleScreen2}>
                <View style={styles.roleLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.addUser.map((user, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.categoryButton}
                      onPress={() => this.selectUser(user)}
                    >
                      <Text>{user}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              :
              null
            }
          </View>
          <View style={styles.roleCatScreen}>
            <View style={styles.roleScreen}>
              <View style={styles.roleLabelBox}>
                <Text style={styles.roleLabel}>
                  Category
              </Text>
              </View>
              <View style={styles.roleInputBox}>
                <TextInput style={styles.roleTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='Category'
                  value={this.state.category}
                  onChangeText={(category) => this.setState({ category })}
                  onFocus={() => this.setState({ isCategory: true })}
                />
                <TouchableOpacity>
                  <Ionicons style={styles.dropicons}
                    name='md-arrow-dropdown'
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.isCategory
              ?
              <View style={styles.roleScreen2}>
                <View style={styles.roleLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.addCategory.map((cat, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.categoryButton}
                      onPress={() => this.selectCategory(cat)}
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
              onPress={this.addnewuser}>
              <Text style={styles.buttonText}>
                Add New User
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signinScreen}>
            <View style={styles.signinTextCont}>
              <Text style={styles.signinText}>
                Alredy have an account?
              </Text>
              <TouchableOpacity>
                <Text style={styles.signinbuttonText}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  addnewuser = () => {
    const { first_name, last_name, email, password, roles, users, category,
           preventive_maintenance, breakdown_maintenance, tool_replacement, isActive } = this.state;
    fetch("http://192.168.43.91:3001/api/users/adduser", {
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
        users,
        category,
        preventive_maintenance,
        breakdown_maintenance,
        tool_replacement,
        isActive,

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
