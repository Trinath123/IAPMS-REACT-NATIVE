import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {
  View,
  Text,
  TouchableOpacity, 
  FlatList
} from 'react-native';

import styles from './styles/Productionreport';

export default class productionreport extends Component {
  static navigationOptions = () => ({
    title: 'Production Report',
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
      startDate: '2019-04-28',
      endDate: '2019-05-21',
      dataSource: [],
    }
    this.getdata = this.getdata.bind(this);
  }


  // renderItem1 = ({ }) => {
  //   return (
  //     <View style={styles.header}>
  //       <Text style={styles.headtext1}>ToolID</Text>
  //       <Text style={styles.headtext2}>VariantID</Text>
  //       <Text style={styles.headtext3}>TimeStamp</Text>
  //     </View>
  //   );
  // }

  renderItem = ({ item }) => {
    return (
      <View style={styles.header1}>
        <Text style={styles.textsty2}><Text style={styles.htext1}>No of Shift:</Text> {item.Id.toString()}</Text>
        <Text style={styles.textsty2}><Text style={styles.htext1}>Shift:</Text> {item.shift.toString()}</Text>
        <Text style={styles.textsty2}><Text style={styles.htext1}>ToolID:</Text> {item.tolid}</Text>
        <Text style={styles.textsty2}><Text style={styles.htext1}>VariantID: </Text>{item.vrid}</Text>
        <Text style={styles.textsty2}><Text style={styles.htext1}>Actual:</Text> {item.moldActualCount.toString()}</Text>
        <Text style={styles.textsty2}><Text style={styles.htext1}>Dummy: </Text>{item.moldDummyCount.toString()}</Text>
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
  //   return fetch("http://192.168.1.10:3001/api/Mold")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       this.setState({
  //         dataSource: res.mold
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  // }

  render() {
    const maxDate = new Date();
    const minDate = new Date();
    //console.log(maxDate);
    return (
      <View style={styles.container}>
        <View style={styles.preventiveScreen}>
          <View style={styles.dateScreen}>
            <View style={styles.dateLabelBox}>
              <Text style={styles.dateLabel}>Start date</Text>
            </View>
            <View style={styles.pickerScreen}>
              <DatePicker
                style={{
                  width: 250,
                  //borderColor:'black',
                  borderWidth: 1,
                  //height:10
                }}
                date={this.state.startDate}
                mode="date"
                placeholder="select date"
                // format="YYYY-MM-DD"
                // minDate="2016-05-01"
                maxDate={maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    //position: 'absolute',
                    display: 'none'
                  },
                  placeholderText: {
                    fontSize: 20,
                    color: 'black',
                    paddingRight: 100
                  },
                  dateText: {
                    fontSize: 20,
                    marginRight: 60
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ startDate: date }) }}
              />
            </View>
          </View>
          <View style={styles.dateScreen}>
            <View style={styles.dateLabelBox}>
              <Text style={styles.dateLabel}>End date</Text>
            </View>
            <View style={styles.pickerScreen}>
              <DatePicker
                style={{
                  width: 250,
                  //borderColor:'black',
                  borderWidth: 1,
                  //height:10
                }}
                date={this.state.endDate}
                mode="date"
                placeholder="select date"
                // format="YYYY-MM-DD"
                maxDate={maxDate}
                //maxDate="2020-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    //position: 'absolute',
                    display: 'none'
                  },
                  placeholderText: {
                    fontSize: 20,
                    color: 'black',
                    paddingRight: 100
                  },
                  dateText: {
                    fontSize: 20,
                    marginRight: 60
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ endDate: date }) }}
              />
            </View>
          </View>
          <View style={styles.buttonScreen}>
            <View style={styles.getbuttonScreen}>
              <TouchableOpacity
                style={styles.getbutton}
                onPress={this.getdata}>
                <Text style={styles.buttonText}>GET</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.flatlistScreen}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.Id}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }

  getdata() {
    const { startDate, endDate } = this.state;
    const { navigate } = this.props.navigation;

    fetch("http://192.168.1.10:3001/api/Mold/getMoldData", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        startDate,
        endDate
      })
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success == true) {
          // this.setState({
          //   dataSource: res.moldShiftCount
          // });
//          let dataArray = [];
  //        let xAxis = [];
        //  console.log(res.moldCount);
          // res.moldCount.map((mold, i) => {
          //   dataArray.push(mold.Actual);
          //   xAxis.push({xData: ((new Date(mold.dayData)).getMonth())});
          // });

          navigate('Productionchart', {
            moldCount: res.moldCount
            // dataArray,
            // xAxis
          });
        }
        else {
          alert(res.message);
        }
      })
      .done();
  }
}
