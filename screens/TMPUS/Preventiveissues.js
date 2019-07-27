import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    ScrollView,
    Alert,
    TextInput
} from 'react-native';
import styles from './styles/Preventiveissues'

export default class Preventiveissues extends Component {
    static navigationOptions = () =>({
        title:'Preventive Issues',
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
            dataSource: [],
            SwitchOnValueHolder: {}
        }
        this.ShowAlert = this.ShowAlert.bind(this);
    }

    ShowAlert(item) {
        console.log(item);
        if (item) {
            Alert.alert(item.id);
        }
        else {
            Alert.alert("Switch is Off.");
        }
        this.setState({
            SwitchOnValueHolder: item
        })
    }

    renderItem1 = ({ }) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headtext1}>
                    Id
                </Text>
                <Text style={styles.headtext2}>
                    Desicription
                </Text>
                <Text style={styles.headtext3}>
                    Date
                </Text>
                <Text style={styles.headtext4}>
                    Status
                </Text>
            </View>
        );
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.header1}>
                <Text style={styles.textsty1}>
                    {item.issueId}
                </Text>
                <Text style={styles.textsty2}>
                    {item.description}
                </Text>
                <Text style={styles.textsty3}>
                    {item.date}
                </Text>
                <Text style={styles.textsty4}>
                    {item.status}
                </Text>
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

    componentDidMount() {
        return fetch("http://192.168.0.41:3001/api/preventive")
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    dataSource: res.user
                });
            })
            .catch((error) => {
                console.error(error);
            })
    }
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.preventiveScreen}>
                  <View style={styles.searchScreen}>
                    <View style={styles.searchLabelBox}>
                       <Text style={styles.searchLabel}>Search</Text>
                    </View>
                    <View style={styles.searchInputBox}>
                    <TextInput style={styles.searchTextinput}
                        placeholder='Typehere..'
                        placeholderTextColor='#545b66' 
                        selectionColor='black'
                        onChangeText={(search) => this.setState({search})} 
                    />
                    </View>
                   </View>
                   <View style={styles.flatlistScreen}>
                     <FlatList
                        ListHeaderComponent={this.renderItem1}
                        stickyHeaderIndices={[0]}
                        data={this.state.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item._id}
                        ItemSeparatorComponent={this.renderSeparator}
                     />
                    </View>
              </View>
            </View>
        );
    }
}

