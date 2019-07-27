import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './styles/Productionplantable'

export default class Productionplantable extends Component {
    static navigationOptions = () => ({
        title: 'Productionplan Table',
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
        }
    }

    renderItem1 = ({ }) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headtext1}>
                    Wo No
                </Text>
                <Text style={styles.headtext2}>
                    Start time
                </Text>
                <Text style={styles.headtext3}>
                    End time
                </Text>
                <Text style={styles.headtext4}>
                    Quantity
                </Text>
            </View>
        );
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.header1}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ProductionTable', { item })}>
                    <Text style={styles.textsty1}>{item.workOderNumber}</Text>
                </TouchableOpacity>
                <Text style={styles.textsty2}>{item.startTime}</Text>
                <Text style={styles.textsty3}>{item.endTime}</Text>
                <Text style={styles.textsty4}>{item.qtyPlanned}</Text>
            </View>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: "red"
                }}>
            </View>
        );
    }

    componentDidMount() {
        return fetch("http://192.168.1.10:3001/api/Production")
            .then((response) => response.json())
            .then((res) => {
                console.log(res.tools);
                this.setState({
                    dataSource: res.productionplan
                });
            })
            .catch((error) => {
                console.error(error);
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.productionScreen}>
                    <View style={styles.searchScreen}>
                        <View style={styles.searchLabelBox}>
                            <Text style={styles.searchLabel}>Search</Text>
                        </View>
                        <View style={styles.searchInputBox}>
                            <TextInput style={styles.searchTextinput}
                                placeholder='Typehere..'
                                placeholderTextColor='#545b66'
                                selectionColor='black'
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

