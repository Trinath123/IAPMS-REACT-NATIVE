
import React, {Component} from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import styles from './styles/Forgotpass';

export default class Forgotpass extends Component {

  static navigationOptions = () =>({
    title:'Forgot Password',
    headerTitleStyle: { 
      flex: 1,
      textAlign: 'center', 
      fontSize: 25,
      color: 'darkblue'
    },
  });
  constructor(props) {
    super(props);
    state = {
      email   : ''
    }
    
    this.onClickListener = this.onClickListener.bind(this);
  }
  async onClickListener() {
    const { email} = this.state;
    const url="http://192.168.0.41:3001/api/users/deleteuser";
    await fetch(url, {
      method:"DELETE",
      headers:{
        Accept:'Application/json',
        'Content-Type':'Application/json'
      },
      body: JSON.stringify({
        email
      })
    })
    .then((response) => response.json())
    .then((res) => {
      Alert.alert("Button pressed ");
    })
    .done();
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.forgotScreen}>
        <View style={styles.topScreen} />
        <View style={styles.emailScreen}>
          <View style={styles.emailLabelBox}>
            <Text style={styles.emailLabel}>Email</Text>
          </View>
          <View style={styles.emailInputBox}>
            <TextInput style={styles.emailTextinput}
                placeholder="Email"
                selectionColor="black"
                underlineColorAndroid={'transparent'}
                onChangeText={(email) => this.setState({email})} 
            />
           </View>
          </View>
          <View style={styles.buttonScreen}>      
              <TouchableOpacity 
                style={styles.button} 
                onPress={() =>this.onClickListener('')} 
              >
                <Text style={styles.buttonText}>
                  Submit 
                </Text>
             </TouchableOpacity>
          </View>
          <View style={styles.gotoScreen}>
            <TouchableOpacity 
                onPress={() => navigate('Passwordinfo')}
             >   
             <Text style={styles.signinText}>
              Go to signin
           </Text>
            </TouchableOpacity>
          </View>
      </View>         
    </View>
  );
}
}

