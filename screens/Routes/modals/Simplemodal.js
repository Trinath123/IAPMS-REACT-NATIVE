import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'

import Welcome from '../../Welcome'
export default class Simplemodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: [],
            width: Dimensions.get('window').width,
            isLogout:true
        };
        Dimensions.addEventListener('change', (e) => {
            this.setState(e.window);
        })

        // this.logoutSelectButPressed = this.logoutSelectButPressed.bind(this);
    }


    closeModal = () => {
        this.props.changeModalVisibility(false);
    }


    // gotoNextScreen = () => {
    //     this.props.navigation.navigate('AddEdit1');
    // };


    // componentDidMount() {
    //     this.setState(this.props.navigation);
    //     this.props.navigation.setParams({
    //         handleLogoutButPressed: this.welcomeButPressed.bind(this),
    //     });

    //     if (this.props.navigation.state.params) {
    //         const { welcome } = this.props.navigation.state.params;
    //         this.setState({ welcome });    
    //     }
    // }


    // welcomeButPressed() {
    //     const welcome = this.state.welcome;
    //     this.props.navigation.navigate('Welcome', { welcome, addDoc: this.logoutSelectButPressed });
    // }

    // logoutSelectButPressed(welcome) {
    //     this.setState({ welcome });
    // }

    render() {
        const { navigate } = this.props;
        //const { navigation } = this.props;
        return (
           
            <TouchableHighlight activeOpacity={1} disabled={true} style={styles.contentContainer}>
                <View style={[styles.modal, { width: this.state.width - 180 }]}>
                    <TouchableOpacity>
                        <Text style={[styles.text2]}> Profile </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.text2]}> Help </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.text2]}> Change Password </Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity  onPress={() => navigate('Login')}>
                        <Text style={[styles.text2]}> LogOut</Text>
                    </TouchableOpacity>
                   
                    
                    {/* <View style={styles.buttonView}>
                        <TouchableHighlight onPress={() => this.closeModal()} style={styles.touchableHighlight} underlayColor={'#f1f1f1'}>
                            <Text style={[styles.text, { color: "blue" }]}> cancel </Text>
                        </TouchableHighlight >
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("AddEdit") }} style={styles.touchableHighlight} underlayColor={'#f1f1f1'}>
                            <Text style={[styles.text, { color: "red" }]}> ok </Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
      
    },
    modal: {
        height: '40%',
        marginTop: '1%',
        alignSelf: 'center',
        marginLeft: '42%',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 25,
    },
    text2: {
        margin: '8%',
        fontSize: 19,
        marginLeft: '7%',
        color: "#2f3130"
    },
})
