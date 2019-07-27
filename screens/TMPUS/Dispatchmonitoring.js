import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Keyboard,
    AsyncStorage
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/Dispatchmonitoring';

export default class Dispatchmonitoring extends Component {
    static navigationOptions = () => ({
        title: 'Dispatch Monitoring',
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
            barcode: '',
            advicenote: '',
            quantity: '',
            supplier_code: '',
            batch_no: '',
            part_no: '',
            supplier_part_no: '',
            serial_no: '',
        }

    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.dispatchScreen}>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Bar Code</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(barcode) => this.setState({ barcode })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Advice(N)</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(advicenote) => this.setState({ advicenote })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Quantity(Q)</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(quantity) => this.setState({ quantity })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Supplier(V)</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(supplier_code) => this.setState({ supplier_code })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Batch no(H)</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(batch_no) => this.setState({ batch_no })}
                            />
                        </View>
                    </View>

                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Part no(P)</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(part_no) => this.setState({ part_no })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Supplier(IP)</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(supplier_part_no) => this.setState({ supplier_part_no })}
                            />
                        </View>
                    </View>

                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Serial No(M)</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder=''
                                selectionColor='black'
                                underlineColorAndroid={'transparent'}
                                onChangeText={(serial_no) => this.setState({ serial_no })}
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
        const { barcode, advicenote, quantity, supplier_code, batch_no,
            part_no, supplier_part_no, serial_no } = this.state;
        fetch("http://192.168.1.8:3001/api/Dispatch/adddispatch", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                barcode,
                advicenote,
                quantity,
                supplier_code,
                batch_no,
                part_no,
                supplier_part_no,
                serial_no,
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
        //     barcode: '',
        //     advicenote: '',
        //     quantity: '',
        //     supplier_code: '',
        //     batch_no: '',
        //     part_no: '',
        //     supplier_part_no: '',
        //     serial_no: '',
        // })
    }
}

