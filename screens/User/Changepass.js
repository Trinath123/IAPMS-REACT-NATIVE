
import React, {Component} from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from './styles/Changepass';

export default class Changepass extends Component {

  static navigationOptions = () =>({
    title:'Change Password',
    headerTitleStyle: { 
      flex: 1,
      textAlign: 'center', 
      fontSize: 22,
      color: 'darkblue'
    },
  });
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.changepassScreen}>
          <View style={styles.topScreen} />
          <View style={styles.currentpassScreen}>
            <View style={styles.currentpassLabelBox}>
              <Text style={styles.currentpassLabel}>Current Password</Text>
            </View>
            <View style={styles.currentpassInputBox}>
              <TextInput style={styles.currentpassTextinput}
                  placeholder="CurrentPassword"
                  selectionColor="black"
                  underlineColorAndroid={'transparent'}
                  onChangeText={(currentpassword) => this.setState({currentpassword})} 
              />
            </View>
          </View>
          <View style={styles.newpasswordScreen}>
            <View style={styles.newpasswordLabelBox}>
              <Text style={styles.newpasswordLabel}>New Password</Text>
            </View>
            <View style={styles.newpasswordInputBox}>
               <TextInput style={styles.newpasswordTextinput}
                  placeholder="NewPassword"
                  selectionColor="black"
                  underlineColorAndroid={'transparent'} 
                  secureTextEntry={true} 
                  onChangeText={(newpassword) => this.setState({newpassword})}
                />
            </View>
          </View>
          <View style={styles.confpasswordScreen}>
            <View style={styles.confpasswordLabelBox}>
              <Text style={styles.confpasswordLabel}>Conform Password</Text>
            </View>
            <View style={styles.confpasswordInputBox}>
               <TextInput style={styles.confpasswordTextinput}
                  placeholder="ConfPassword"
                  selectionColor="black"
                  underlineColorAndroid={'transparent'} 
                  secureTextEntry={true} 
                  onChangeText={(confpassword) => this.setState({confpassword})}
                />
            </View>
          </View>
          <View style={styles.buttonScreen}>      
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigate('Login')} 
              >
                <Text style={styles.buttonText}>
                  Submit 
                </Text>
             </TouchableOpacity>
          </View>
        </View>         
      </View>
    );
  }
}

