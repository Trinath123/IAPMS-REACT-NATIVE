import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/Productionplan';

export default class Productionplan extends Component {
    static navigationOptions = () => ({
        title: 'Production Plan',
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
            productionplan: {},
            workOderNumber: '',
            lineName: '',
            materialNo: '',
            variantName: '',
            toolId: '',
            startTime: '',
            endTime: '',
            qtyPlanned: '',
            cavity: '',
            datePlanned:new Date(),
            prodMtaerialno: [],
            isMaterialno: false,
            prodToolid: [],
            isToolid: false,
            prodLinename: [],
            isLinename: false,
            prodVariant: [],
            isVariant: false,
            prodCavitiesno: ['1', '2', '3',],
            isCavitiesno: false,
        }
        this.selectMaterialno = this.selectMaterialno.bind(this);
        this.selectToolid = this.selectToolid.bind(this);
        this.selectLinename = this.selectLinename.bind(this);
        this.selectVariant = this.selectVariant.bind(this);
        this.selectCavitiesno = this.selectCavitiesno.bind(this);
    };


    componentDidMount() {
        return fetch("http://192.168.1.10:3001/api/Production")
            .then((response) => response.json())
            .then((res) => {
                console.log(res.lines);
                this.setState({
                    prodToolid: res.tools,
                    prodMtaerialno: res.variants,
                    prodVariant: res.variants,
                    prodLinename: res.lines
                });
            })
            .catch((error) => {
                console.error(error);
            })
    }

    selectMaterialno(mno) {
        this.setState({ materialNo: mno, isMaterialno: false });
    }
    selectToolid(tid) {
        this.setState({ toolId: tid, isToolid: false });
    }
    selectLinename(lname) {
        this.setState({ lineName: lname, isLinename: false });
    }
    selectVariant(vname) {
        this.setState({ variantName: vname, isVariant: false });
    }
    selectCavitiesno(cno) {
        this.setState({ cavity: cno, isCavitiesno: false });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { productionplan } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.productionScreen}>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>WO No</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                // placeholder='Work Order No'
                                // placeholderTextColor='#545b66'
                                // selectionColor='black'
                                //value={productionplan.workOderNumber}
                                // underlineColorAndroid={'transparent'}
                                value={this.state.workOderNumber}
                                onChangeText={(workOderNumber) => this.setState({ workOderNumber })}
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
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    placeholderTextColor='#545b66'
                                    value={this.state.lineName}
                                    onChangeText={(lineName) => this.setState({ lineName })}
                                    onFocus={() => this.setState({ isLinename: true })}
                                />
                                <TouchableOpacity>
                                    <Ionicons style={styles.dropicons}
                                        name='md-arrow-dropdown'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.isLinename
                            ?
                            <View style={styles.dropScreen2}>
                                <View style={styles.dropLabelBox2} />
                                <View style={styles.userRoles}>
                                    {this.state.prodLinename.map((lname, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.dropButton}
                                            onPress={() => this.selectLinename(lname.lineName)}>
                                            <Text style={styles.droptext}>{lname.lineName}</Text>
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
                                <Text style={styles.dropLabel}>Tool Id</Text>
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
                                    {this.state.prodToolid.map((tid, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.dropButton}
                                            onPress={() => this.selectToolid(tid.toolId)}>
                                            <Text style={styles.droptext}>{tid.toolId}</Text>
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
                                <Text style={styles.dropLabel}>Material No</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    placeholderTextColor='#545b66'
                                    value={this.state.materialNo}
                                    onChangeText={(materialNo) => this.setState({ materialNo })}
                                    onFocus={() => this.setState({ isMaterialno: true })}
                                />
                                <TouchableOpacity>
                                    <Ionicons style={styles.dropicons}
                                        name='md-arrow-dropdown'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.isMaterialno
                            ?
                            <View style={styles.dropScreen2}>
                                <View style={styles.dropLabelBox2} />
                                <View style={styles.userRoles}>
                                    {this.state.prodMtaerialno.map((mno, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.dropButton}
                                            onPress={() => this.selectMaterialno(mno.materialNo)}>
                                            <Text style={styles.droptext}>{mno.materialNo}</Text>
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
                                <Text style={styles.dropLabel}>Variant</Text>
                            </View>
                            <View style={styles.dropInputBox}>
                                <TextInput style={styles.dropTextinput}
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    placeholderTextColor='#545b66'
                                    value={this.state.variantName}
                                    onChangeText={(varientName) => this.setState({ varientName })}
                                    onFocus={() => this.setState({ isVariant: true })}
                                />
                                <TouchableOpacity>
                                    <Ionicons style={styles.dropicons}
                                        name='md-arrow-dropdown'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.isVariant
                            ?
                            <View style={styles.dropScreen2}>
                                <View style={styles.dropLabelBox2} />
                                <View style={styles.userRoles}>
                                    {this.state.prodVariant.map((vname, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.dropButton}
                                            onPress={() => this.selectVariant(vname.variantName)}>
                                            <Text style={styles.droptext}>{vname.variantName}</Text>
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
                            <Text style={styles.nameLabel}>Quantity</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                value={this.state.qtyPlanned}
                                onChangeText={(qtyPlanned) => this.setState({ qtyPlanned })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>Start Time</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                value={this.state.startTime}
                                onChangeText={(startTime) => this.setState({ startTime })}
                            />
                        </View>
                    </View>
                    <View style={styles.nameScreen}>
                        <View style={styles.nameLabelBox}>
                            <Text style={styles.nameLabel}>End Time</Text>
                        </View>
                        <View style={styles.nameInputBox}>
                            <TextInput style={styles.nameTextinput}
                                value={this.state.endTime}
                                onChangeText={(endTime) => this.setState({ endTime })}
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
                                    onPress={Keyboard.dismiss()}
                                    placeholder='select'
                                    placeholderTextColor='#545b66'
                                    value={this.state.cavity}
                                    onChangeText={(cavity) => this.setState({ cavity })}
                                    onFocus={() => this.setState({ isCavitiesno: true })}
                                />
                                <TouchableOpacity>
                                    <Ionicons style={styles.dropicons}
                                        name='md-arrow-dropdown'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.isCavitiesno
                            ?
                            <View style={styles.dropScreen2}>
                                <View style={styles.dropLabelBox2} />
                                <View style={styles.userRoles}>
                                    {this.state.prodCavitiesno.map((cno, i) => (
                                        <TouchableOpacity
                                            key={i}
                                            style={styles.dropButton}
                                            onPress={() => this.selectCavitiesno(cno)}>
                                            <Text style={styles.droptext}>{cno}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                            :
                            null
                        }
                    </View>
                </View>
                <View style={styles.buttonScreen}>
                    <View style={styles.savebuttonScreen}>
                        <TouchableOpacity
                            style={styles.savebutton}
                            onPress={this.addProductionplan}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    addProductionplan = () => {
        const { workOderNumber, lineName, materialNo, variantName, toolId, startTime, endTime,
            qtyPlanned, cavity,datePlanned } = this.state;
        fetch("http://192.168.0.50:3001/api/Production/addissue", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                workOderNumber,
                lineName,
                materialNo,
                variantName,
                toolId,
                startTime,
                endTime,
                qtyPlanned, 
                cavity,
                datePlanned
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.success == true) {
                    alert("You are successfull add new production plan data");
                    // AsyncStorage.setItem('user', res.user)
                    // this.props.navigation.navigate('Edituser');
                }
                else {
                    alert(res.message);
                }
            })
            .done();
        this.setState({
            workOderNumber: '',
            lineName: '',
            materialNo: '',
            variantName: '',
            toolId: '',
            startTime: '',
            endTime: '',
            qtyPlanned: '',
            cavity: '',
        })
    }
}

