import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    FlatList,
    TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/Dispatchreport';

export default class Dispatchreport extends Component {
    static navigationOptions = () => ({
        title: 'Dispatch Report',
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
            fromDate: '',
            toDate: '',
            dataSource: [],
            SwitchOnValueHolder: {},
            disYear: ['2017', '2018', '2019'],
            year: '',
            isYear: false,
            disMonth: ['jan', 'feb', 'march'],
            month: '',
            isMonth: false,
            disDay: ['2017', '2018', '2019'],
            day: '',
            isDay: false,
            disShift: ['jan', 'feb', 'march'],
            shift: '',
            isShift: false,
        }
        this.selectYear = this.selectYear.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.selectShift = this.selectShift.bind(this);
    }
    selectYear(yr) {
        const { year } = this.state;
        this.setState({ year: yr, isYear: false });
    }
    selectMonth(mon) {
        const { month } = this.state;
        this.setState({ month: mon, isMonth: false });
    }
    selectDay(dy) {
        const { day } = this.state;
        this.setState({ day: dy, isDay: false });
    }
    selectShift(sh) {
        const { shift } = this.state;
        this.setState({ shift: sh, isShift: false });
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
            <View style={{height: 1,width: '100%',backgroundColor: "black"}}></View>
        );
    }

    componentDidMount() {
        return fetch("http://192.168.43.91:3001/api/preventive")
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
                <View style={styles.dispatchScreen}>
                    <View style={styles.dateScreen}>
                        <View style={styles.dateLabelBox}>
                            <Text style={styles.dateLabel}>Start Date</Text>
                        </View>
                        <View style={styles.dateinputScreen}>
                            <DatePicker
                                style={{
                                    width: 250,
                                    //borderColor:'black',
                                    borderWidth: 1,
                                    //height:10
                                }}
                                date={this.state.fromDate}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2020-06-01"
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
                                onDateChange={(date) => { this.setState({ fromDate: date }) }}
                            />
                        </View>
                    </View>
                    <View style={styles.dateScreen}>
                        <View style={styles.dateLabelBox}>
                            <Text style={styles.dateLabel}>End Date</Text>
                        </View>
                        <View style={styles.dateinputScreen}>
                            <DatePicker
                                style={{
                                    width: 250,
                                    //borderColor:'black',
                                    borderWidth: 1,
                                    //height:10
                                }}
                                date={this.state.toDate}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2020-06-01"
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
                                onDateChange={(date) => { this.setState({ toDate: date }) }}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonScreen}>
                        <View style={styles.searchbuttonScreen}>
                            <TouchableOpacity
                                style={styles.searchbutton}
                                onPress={() => this.onClickListener('')}
                            >
                                <Ionicons
                                    name="md-search"
                                    color="white"
                                    size={35}
                                    style={styles.searchIcon}
                                    onPress={() => this.props.navigation.toggleDrawer()}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.savebuttonScreen}>
                            <TouchableOpacity
                                style={styles.savebutton}
                                onPress={() => this.onClickListener('')}
                            >
                                <View style={styles.icons}>
                                    <Ionicons
                                        name="ios-cloud-download"
                                        color="white"
                                        size={30}
                                        style={styles.searchIcon}
                                        onPress={() => this.props.navigation.toggleDrawer()}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.yearmonthScreen}>
                        <View style={styles.nameScreen}>
                            <View style={styles.nameLabelBox}>
                                <Text style={styles.nameLabel}>Year</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    value={this.state.year}
                                    selectionColor='black'
                                    onChangeText={(year) => this.setState({ year })}
                                    onFocus={() => this.setState({ isYear: true })}
                                    underlineColorAndroid={'transparent'}
                                />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                            {this.state.isYear
                                ?
                                <View style={styles.dropScreen2}>
                                    <View style={styles.dropLabelBox} />
                                    <View style={styles.userRoles}>
                                        {this.state.disYear.map((yr, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.dropButton}
                                                onPress={() => this.selectYear(yr)}
                                            >
                                                <Text>{yr}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                :
                                null
                            }
                        </View>
                        <View style={styles.nameScreen}>
                            <View style={styles.nameLabelBox}>
                                <Text style={styles.nameLabel}>Month</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    value={this.state.month}
                                    selectionColor='black'
                                    onChangeText={(month) => this.setState({ month })}
                                    onFocus={() => this.setState({ isMonth: true })}
                                    underlineColorAndroid={'transparent'}
                                />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                            {this.state.isMonth
                                ?
                                <View style={styles.dropScreen2}>
                                    <View style={styles.dropLabelBox2} />
                                    <View style={styles.userRoles}>
                                        {this.state.disMonth.map((mon, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.dropButton}
                                                onPress={() => this.selectMonth(mon)}
                                            >
                                                <Text>{mon}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                :
                                null
                            }
                        </View>
                    </View>
                    <View style={styles.yearmonthScreen}>
                        <View style={styles.nameScreen}>
                            <View style={styles.nameLabelBox}>
                                <Text style={styles.nameLabel}>Day</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    value={this.state.day}
                                    selectionColor='black'
                                    onChangeText={(day) => this.setState({ day })}
                                    onFocus={() => this.setState({ isDay: true })}
                                    underlineColorAndroid={'transparent'}
                                />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                            {this.state.isDay
                                ?
                                <View style={styles.dropScreen2}>
                                    <View style={styles.dropLabelBox} />
                                    <View style={styles.userRoles}>
                                        {this.state.disDay.map((dy, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.dropButton}
                                                onPress={() => this.selectDay(dy)}
                                            >
                                                <Text>{dy}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                :
                                null
                            }
                        </View>
                        <View style={styles.nameScreen}>
                            <View style={styles.nameLabelBox}>
                                <Text style={styles.nameLabel}>Shift</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    value={this.state.shift}
                                    selectionColor='black'
                                    onChangeText={(shift) => this.setState({ shift })}
                                    onFocus={() => this.setState({ isShift: true })}
                                    underlineColorAndroid={'transparent'}
                                />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                            {this.state.isShift
                                ?
                                <View style={styles.dropScreen2}>
                                    <View style={styles.dropLabelBox2} />
                                    <View style={styles.userRoles}>
                                        {this.state.disShift.map((sh, i) => (
                                            <TouchableOpacity
                                                key={i}
                                                style={styles.dropButton}
                                                onPress={() => this.selectShift(sh)}
                                            >
                                                <Text>{sh}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                :
                                null
                            }
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
            </View>
        );
    }
}
