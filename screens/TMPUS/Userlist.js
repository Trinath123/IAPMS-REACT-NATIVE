import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Alert,
    Keyboard,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './styles/Userlist'
import { Ionicons } from '@expo/vector-icons'

export default class Userlist extends Component {
    static navigationOptions = () => ({
        title: 'User List',
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
            SwitchOnValueHolder: {},
            usershow: ['10', '20', '30', '40', '50', '60'],
            show: '',
            isshow: false
        }
        this.ShowAlert = this.ShowAlert.bind(this);
        this.selectshow = this.selectshow.bind(this);
    }

    ShowAlert(item) {
        console.log(item);
        if (item) {
            Alert.alert(item.first_name);
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
                <Text style={styles.headtext1}>First_Name</Text>
                <Text style={styles.headtext2}> Last_Name </Text>
                <Text style={styles.headtext3}>Login_id</Text>
                <Text style={styles.headtext4}>Category</Text>
                <Text style={styles.headtext5}>IsActive</Text>
                <Text style={styles.headtext6}>Edit</Text>
            </View>
        );
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.header1}>
                <Text style={styles.textsty1}>{item.first_name}</Text>
                <Text style={styles.textsty2}>{item.last_name}</Text>
                <Text style={styles.textsty3}>{item.email}</Text>
                <Text style={styles.textsty4}>{item.category}</Text>
                <Text style={styles.textsty5}>{item.isActive}</Text>
                <TouchableHighlight onPress={() => this.ShowAlert(item)}>
                    <Text style={styles.textsty6}>Edit</Text>
                </TouchableHighlight>
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
        return fetch("http://192.168.0.53:3001/api/users")
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
    selectshow(shw) {
        const { show } = this.state;
        this.setState({ show: shw, isshow: false });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userlistScreen}>
                    <View style={styles.totalshowScreen}>
                        <View style={styles.showScreen}>
                            <View style={styles.showlabelScreen}>
                                <View style={styles.showLabelBox}>
                                    <Text style={styles.showLabel}>Show</Text>
                                </View>
                                <View style={styles.showInputBox}>
                                    <TextInput style={styles.showTextinput}
                                        onPress={Keyboard.dismiss()}
                                        placeholder='select'
                                        value={this.state.show}
                                        selectionColor='black'
                                        onChangeText={(show) => this.setState({ show })}
                                        onFocus={() => this.setState({ isshow: true })}
                                        underlineColorAndroid={'transparent'}
                                    />
                                    <TouchableOpacity>
                                        <Ionicons style={styles.dropicons}
                                            name='md-arrow-dropdown'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {this.state.isshow
                                ?
                                <View style={styles.showScreen2}>
                                    <View style={styles.showLabelBox2} />
                                    <View style={styles.userShow}>
                                        {this.state.usershow.map((shw, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.showButton}
                                                onPress={() => this.selectshow(shw)}>
                                                <Text>{shw}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                :
                                null
                            }
                            <View style={styles.entriesLabelBox}>
                                <Text style={styles.entriesLabel}>entries</Text>
                            </View>
                        </View>
                        <View style={styles.buttonScreen}>
                            <TouchableOpacity
                                style={styles.createbutton}
                                onPress={() => this.onClickListener('')}>
                                <Text style={styles.buttonText}>Create</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchScreen}>
                        <View style={styles.searchLabelBox}>
                            <Text style={styles.searchLabel}>Search</Text>
                        </View>
                        <View style={styles.searchInputBox}>
                            <TextInput style={styles.searchTextinput}
                                placeholder="Typehere.."
                                selectionColor="black"
                                onChangeText={(search) => this.setState({ search })}
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

