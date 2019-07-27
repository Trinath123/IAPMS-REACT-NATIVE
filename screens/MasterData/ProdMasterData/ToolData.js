import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/ToolData';

export default class Tooldata extends Component {
  static navigationOptions = () => ({
    title: 'Tool Master Data',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 22,
      color: 'darkblue'
    },
  });
  constructor(props) {
    super(props);
    this.state = {
      toolId: '',
      toolName: '',
      startDate: '',
      lifespanWarn: '',
      lifespanThreshold: '',
      lifespanBlocking: '',
      preventiveWarning: '',
      preventiveThreshold: '',
      prventiveBlocking: '',
      cavities: '',
      isActive: '',
      cavityNumbering: ''
    }

  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.dispatchScreen}>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>Tool ID</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(toolId) => this.setState({ toolId })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>Tool Name</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(toolName) => this.setState({ toolName })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>Start Date</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(startDate) => this.setState({ startDate })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>LSWarning</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(lifespanWarn) => this.setState({ lifespanWarn })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>LSThreshold</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(lifespanThreshold) => this.setState({ lifespanThreshold })}
              />
            </View>
          </View>

          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>LSBlocking</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(lifespanBlocking) => this.setState({ lifespanBlocking })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>PWarning</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(preventiveWarning) => this.setState({ preventiveWarning })}
              />
            </View>
          </View>

          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>PThreshold</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(preventiveThreshold) => this.setState({ preventiveThreshold })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>PBlocking</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(prventiveBlocking) => this.setState({ prventiveBlocking })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>Cavities</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(cavities) => this.setState({ cavities })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>isActive</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(isActive) => this.setState({ isActive })}
              />
            </View>
          </View>
          <View style={styles.nameScreen}>
            <View style={styles.nameLabelBox}>
              <Text style={styles.nameLabel}>CavityNo</Text>
            </View>
            <View style={styles.nameInputBox}>
              <TextInput style={styles.nameTextinput}
                placeholder=''
                selectionColor='black'
                underlineColorAndroid={'transparent'}
                onChangeText={(cavityNumbering) => this.setState({ cavityNumbering })}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonScreen}>
          <View style={styles.savebuttonScreen}>
            <TouchableOpacity
              style={styles.savebutton}
              onPress={this.dispatchsave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  dispatchsave = () => {
    const { toolId, toolName, startDate, lifespanWarn, lifespanThreshold,
      lifespanBlocking,preventiveWarning, preventiveThreshold,prventiveBlocking,
      cavities,isActive,cavityNumbering } = this.state;
    fetch("http://192.168.1.8:3001/api/Dispatch/adddispatch", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        toolId,
        toolName,
        startDate,
        lifespanWarn,
        lifespanThreshold,
        lifespanBlocking,
        preventiveWarning,
        preventiveThreshold,
        prventiveBlocking,
        cavities,
        isActive,
        cavityNumbering
      })
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success == true) {
          alert("You are successfull add");
          // AsyncStorage.setItem('user', res.user)
          // this.props.navigation.navigate('Edituser');
        }
        else {
          alert(res.message);
        }
      })
      .done();
    // this.setState({
    //     toolId: '',
    //     toolName: '',
    //     startDate: '',
    //     lifespanWarn: '',
    //     lifespanThreshold: '',
    //     lifespanBlocking: '',
    //     supplier_lifespanBlocking: '',
    //     preventiveThreshold: '',
    // })
  }
}

