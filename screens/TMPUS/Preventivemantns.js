import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles/Preventivemantns';
import { Ionicons } from '@expo/vector-icons';

export default class Preventivemantns extends Component {
  // static navigationOptions = () => ({
  //   title: 'Preventive Maintenace',
  //   headerTitleStyle: {
  //     flex: 1,
  //     textAlign: 'center',
  //     fontSize: 22,
  //     color: 'darkblue'
  //   },
  // });
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      data: [],
    }
  };
  renderItem1 = ({ }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headtext1}>Issue ID :</Text>
        <Text style={styles.headtext2}>Tool ID :</Text>
        <Text style={styles.headtext3}>Description :</Text>
        <Text style={styles.headtext4}>Created Date :</Text>
      </View>
    );
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty1}>{item.first_Name}</Text>
        <Text style={styles.textsty2}>{item.last_name}</Text>
        <Text style={styles.textsty3}>{item.category}</Text>
        <Text style={styles.textsty4}>{item.isActive}</Text>
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

  // componentDidMount() {
  //   return fetch("http://192.168.0.53:3001/api/users")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       this.setState({
  //         dataSource: res.user
  //       });
  //       cosole.log(dataSource);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  // }

  selectCategory(cat) {
    const { category } = this.state;
    this.setState({ category: cat, isCategory: false });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.preventiveScreen}>
          <View style={styles.phaseScreen}>
            <View style={styles.OvalShapeView1}>
              <Text style={styles.txt}>1</Text>
            </View>
            <View style={styles.linestyle}>
            </View>
            <View style={styles.OvalShapeView2}>
              <Text style={styles.txt}>2</Text>
            </View>
            <View style={styles.linestyle}>
            </View>
            <View style={styles.OvalShapeView}>
              <Text style={styles.txt}> 3</Text>
            </View>
            <View style={styles.linestyle}>
            </View>
            <View style={styles.OvalShapeView}>
              <Text style={styles.txt}>4</Text>
            </View>
          </View>
          <View style={styles.textScreen}>
            <Text style={styles.txt1}>Create</Text>
            <Text style={styles.txt1}>Acknowledge</Text>
            <Text style={styles.txt1}>Resolve</Text>
            <Text style={styles.txt1}>Verify</Text>
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
          <View style={styles.actionScreen}>
            <View style={styles.actionLabelBox}>
              <TouchableOpacity>
                <Text style={styles.actionLabel}>Actions Taken</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.checkScreen}>
            <View style={styles.checkLabelBox}>
              <TouchableOpacity>
                <Text style={styles.checkLabel}>Check List</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fieldScreen}>
            <View style={styles.fieldLabelBox}>
              <TouchableOpacity>
                <Text style={styles.fieldLabel}></Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonScreen}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onClickListener('')}>
              <Text style={styles.buttonText}>Acknowledge</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => this.onClickListener('')}>
              <Text style={styles.buttonText}>Resolve</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => this.onClickListener('')}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}