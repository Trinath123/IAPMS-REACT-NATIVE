import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/Productionplan';

export default class ProductionTable extends Component {
    static navigationOptions = () => ({
        title: 'Production Plan2',
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
            workOderNumber: '',
            lineName: '',
            materialNo: '',
            variantName: '',
            toolId: '',
            startTime: '',
            endTime: '',
            qtyPlanned: '',
            cavity: '',
        }

    };

    componentDidMount() {
        const { item } = this.props.navigation.state.params;
        this.setState({
            workOderNumber: item.workOderNumber,
            lineName: item.lineName,
            materialNo: item.materialNo,
            variantName: item.variantName,
            toolId: item.toolId,
            startTime: item.startTime,
            endTime: item.endTime,
            qtyPlanned: item.qtyPlanned,
            cavity: item.cavity
        });

    }

    render() {
        const { navigate } = this.props.navigation;
        const { workOderNumber, toolId, lineName, materialNo,
            variantName, qtyPlanned, startTime, endTime, cavity } = this.state;
        console.log(qtyPlanned);
        return (
            <View style={styles.container}>
                <View style={styles.productionScreen}>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>WO No</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                editable={false}
                                placeholder='Work Order No'
                                value={workOderNumber}
                                onChangeText={(workOderNumber) => this.setState({ workOderNumber: workOderNumber })}
                            />
                        </View>
                    </View>
                    <View style={styles.dropdownScreen}>
                        <View style={styles.dropScreen}>
                            <View style={styles.dropLabelBox}>
                                <Text style={styles.dropLabel}>Line Name</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    editable={false}
                                    placeholder='Line Name'
                                    value={lineName}
                                    onChangeText={(lineName) => this.setState({ lineName: lineName })} />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.dropdownScreen}>
                        <View style={styles.dropScreen}>
                            <View style={styles.dropLabelBox}>
                                <Text style={styles.dropLabel}>Tool Id</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    editable={false}
                                    placeholder='Tool Id'
                                    value={toolId}
                                    onChangeText={(toolId) => this.setState({ toolId: toolId })} />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.dropdownScreen}>
                        <View style={styles.dropScreen}>
                            <View style={styles.dropLabelBox}>
                                <Text style={styles.dropLabel}>Material No</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    editable={false}
                                    placeholder='Material Number'
                                    value={materialNo}
                                    onChangeText={(materialNo) => this.setState({ materialNo: materialNo })}
                                />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.dropdownScreen}>
                        <View style={styles.dropScreen}>
                            <View style={styles.dropLabelBox}>
                                <Text style={styles.dropLabel}>Variant</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    editable={false}
                                    placeholder='Variant Name'
                                    value={variantName}
                                    onChangeText={(variantName) => this.setState({ variantName: variantName })}
                                />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Quantity</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                editable={false}
                                placeholder='Quantity'
                                value={qtyPlanned.toString()}
                                onChangeText={(qtyPlanned) => this.setState({ qtyPlanned: qtyPlanned })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Start Time</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder='Start Time'
                                value={startTime}
                                onChangeText={(startTime) => this.setState({ startTime: startTime })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>End Time</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                placeholder='End Time'
                                value={endTime}
                                onChangeText={(endTime) => this.setState({ endTime: endTime })}
                            />
                        </View>
                    </View>
                    <View style={styles.dropdownScreen}>
                        <View style={styles.dropScreen}>
                            <View style={styles.dropLabelBox}>
                                <Text style={styles.dropLabel}>Cavity</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    editable={false}
                                    placeholder='Number of Cavities'
                                    value={cavity}
                                    onChangeText={(cavity) => this.setState({ cavity: cavity })}
                                />
                                <Ionicons style={styles.dropicons}
                                    name='md-arrow-dropdown'
                                />
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.buttonScreen}>
                    <View style={styles.savebuttonScreen}>
                        <TouchableOpacity
                            style={styles.savebutton}
                            onPress={this.updateProduction}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    updateProduction = () => {
        this.setState({
            workOderNumber: ''
        })
        const { workOderNumber, lineName, toolId, materialNo, variantName,
            qtyPlanned, startTime, endTime, cavity } = this.state;
        fetch("http://192.168.1.10:3001/api/Production/updateissue", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                workOderNumber,
                lineName,
                toolId,
                materialNo,
                variantName,
                qtyPlanned,
                startTime,
                endTime,
                cavity
            })
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.success == true) {
                alert("You are successfull update");
            }
            else {
                alert(res.message);
            }
        })
        .done();
    }
}

