import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    TextInput
} from 'react-native';
import styles from './styles/Toolreplacement';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

export default class Toolreplacement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorName: '',
            toolId: '',
            breakToolid: ['33201518 IA A 001','33201518 IA A 002'],
            isToolid: false,
            breakError: ['Flow Lines','Sink Marks', 'Weld Lines' ,'Burn Marks' , 'Other'],
            isError: false,
        }
        this.selectToolid = this.selectToolid.bind(this);
        this.selectError = this.selectError.bind(this);

        };


    selectToolid(tid) {
        this.setState({ toolId: tid, isToolid: false });
    }
    selectError(Ename) {
        this.setState({ errorName: Ename, isError: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.BreakdownScreen}>
                <View style={styles.dropdownScreen}>
                        <View style={styles.dropScreen}>
                            <View style={styles.dropLabelBox}>
                                <Text style={styles.dropLabel}>Tool Id:</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    placeholderTextColor='#545b66'
                                    value={this.state.toolId}
                                    onChangeText={(toolId) => this.setState({ toolId })}
                                    onFocus={() => this.setState({ isToolid: true })}
                                />
                                <TouchableOpacity>
                                    <Ionicons style={styles.dropicons}
                                        name='md-arrow-dropdown'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.isToolid
                            ?
                            <View style={styles.dropScreen2}>
                                <View style={styles.dropLabelBox2} />
                                <View style={styles.userRoles}>
                                    {this.state.breakToolid.map((tid, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.dropButton}
                                            onPress={() => this.selectToolid(tid)}>
                                            <Text style={styles.droptext}>{tid}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                            :
                            null
                        }
                    </View>
                    <View style={styles.dropdownScreen}>
                        <View style={styles.dropScreen}>
                            <View style={styles.dropLabelBox}>
                                <Text style={styles.dropLabel}>Error Des:</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    placeholderTextColor='#545b66'
                                    value={this.state.errorName}
                                    onChangeText={(errorName) => this.setState({ errorName })}
                                    onFocus={() => this.setState({ isError: true })}
                                />
                                <TouchableOpacity>
                                    <Ionicons style={styles.dropicons}
                                        name='md-arrow-dropdown'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.isError
                            ?
                            <View style={styles.dropScreen3}>
                                <View style={styles.dropLabelBox2} />
                                <View style={styles.userRoles}>
                                    {this.state.breakError.map((Ename, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.dropButton2}
                                            onPress={() => this.selectError(Ename)}>
                                            <Text style={styles.droptext}>{Ename}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                            :
                            null
                        }
                    </View>                    
                    <View style={styles.buttonScreen}>
                        <View style={styles.savebuttonScreen}>
                            <TouchableOpacity
                                style={styles.savebutton}
                                onPress={this.addnewuser}>
                                <Text style={styles.buttonText}>Create Tickets</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}