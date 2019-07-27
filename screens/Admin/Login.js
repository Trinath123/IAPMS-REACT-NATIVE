import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,Alert
} from 'react-native';

import styles from './styles/Login';

export default class Login extends Component {
  static navigationOptions = () => ({
    title: 'Login',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 25,
      color: 'darkblue',
      justifyContent:'center',
      //height:'30%',

    },
    headerStyle:{
      //backgroundColor:'red',
      //height:'30%',
      //justifyContent:'center',
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      email: 'abc@gmail.com',
      password: 'abc',
    }
  }

  // componentDidMount() {
  //   this._loadinitialState().done();
  // }

  // _loadinitialState = async () => {
  //   await AsyncStorage.removeItem('user');
  //   var value = await AsyncStorage.getItem('user');
  //   if (value !== null) {
  //     this.props.navigation.navigate('Browse');
  //   }
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.loginScreen}>
          <View style={styles.topScreen} />
          <View style={styles.screen} />
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>Email</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="Email"
                placeholderTextColor='#545b66'
                selectionColor="black"
                underlineColorAndroid={'transparent'}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>Password</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder="Password"
                placeholderTextColor='#545b66'
                selectionColor="black"
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
          </View>
          <View style={styles.buttonScreen}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Browse')} >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resetScreen}>
            <TouchableOpacity
              onPress={() => navigate('Forgotpass')}>
              <Text style={styles.resetText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupScreen}>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigate('AddEdit')}>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
//   login = () => {
//     if (this.state.email === "" && this.state.password === "") {
//       return Alert.alert("Please enter both Email and Password");
//     }
//     else{
//    fetch("http://192.168.0.53:3001/api/users/check", {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password
//       })
//     })
//       .then((response) => response.json())
//       .then((res) => {
//         if (res.success == true) {
//           //alert("You are successfull login");
//          // AsyncStorage.setItem('user', res.user);
//           console.log(res.user);
//           this.props.navigation.navigate('Browse');
//           //        this.props.navigation.navigate('Logout');
//         }
//         else {
//           alert(res.message);
//         }
//       })
//       .done();
//   }
// }
}

