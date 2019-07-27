import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/Toolhistory';

export default class Toolhistory extends Component {
  static navigationOptions = () => ({
    title: 'Tool History',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 22,
      color: 'darkblue'
    },
  });
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      dataSource: [],
      toolName: ['33201518 IA A 001','33201518 IA A 002','33201518 IA A 0013','33201518 IA A 004'],
      toolname: '',
      isToolname: false,
    }
    this.selectToolname = this.selectToolname.bind(this);
  };

  selectToolname(tnm) {
    const { toolname } = this.state;
    this.setState({ toolname: tnm, isToolname: false });
  }
  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>Id</Text>
        <Text style={styles.headtext2}>Description</Text>
        <Text style={styles.headtext3}>Date</Text>
        <Text style={styles.headtext4}>Closed Date</Text>
        <Text style={styles.headtext5}>Status</Text>
        <Text style={styles.headtext6}>More Info</Text>
      </View>
    );
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{item.issueId}</Text>
        <Text style={styles.textsty2}>{item.correctiveAction.action}</Text>
        <Text style={styles.textsty3}>{item.date}</Text>
        <Text style={styles.textsty4}>{item.closedDate}</Text>
        <Text style={styles.textsty5}>{item.correctiveAction.status}</Text>
        <Text style={styles.textsty6}>{item.moreinfo}</Text>
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
        }}
      >
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolScreen}>
          <View style={styles.dropdownScreen}>
            <View style={styles.dropScreen}>
              <View style={styles.dropInputBox}>
                <TextInput style={styles.dropTextinput}
                  onPress={Keyboard.dismiss()}
                  placeholder='select'
                  placeholderTextColor='#545b66'
                  value={this.state.toolname}
                  selectionColor='black'
                  onChangeText={(toolname) => this.setState({ toolname })}
                  onFocus={() => this.setState({ isToolname: true })}
                  underlineColorAndroid={'transparent'}
                />
                <Ionicons style={styles.dropicons}
                  name='md-arrow-dropdown'
                />
              </View>
            </View>
            {this.state.isToolname
              ?
              <View style={styles.dropScreen2}>
                <View style={styles.dropLabelBox2} />
                <View style={styles.userRoles}>
                  {this.state.toolName.map((tnm, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.dropButton}
                      onPress={() => this.selectToolname(tnm)}>
                      <Text style={styles.droptext}>{tnm}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              :
              null
            }
          </View>
          <View style={styles.buttonScreen}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.onClickListener('')}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flatlistScreen}>
          <FlatList horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={this.renderItem1}
            stickyHeaderIndices={[0]}
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
  // getdata = () => {
  //   const { startDate, endDate } = this.state;
  //   fetch("http://192.168.43.91:3001/api/Production/check", {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       startDate,
  //       endDate
  //     })
  //   })
  //     .then((response) => response.json())
  //     .then((res) => {
  //       if (res.success == true) {
  //         return (fetch("http://192.168.43.91:3001/api/preventive")
  //           .then((response) => response.json())
  //           .then((res) => {
  //             this.setState({
  //               dataSource: res.user
  //             });
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //           }));
  //       }
  //       else {
  //         alert(res.message);
  //       }
  //     })
  //     .done();
  // }
}
