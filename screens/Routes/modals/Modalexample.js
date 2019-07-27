import React, { Component } from 'react'
import {Text,View,Modal,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native'
import Simplemodal from './Simplemodal'
import ModalNav from './ModalNav'

export default class Modalexample extends Component {
    constructor(props){
        super(props);
        this.state ={
            isModalVisible:false,
            //choosenData:'',
        };       
    }

    changeModalVisibility = (bool) => {
        this.setState({ isModalVisible: bool });
    }
    // setData = (data) => {
    //     this.setState({choosenData:data})
    // }
    render() {
        return (
             <View style ={styles.contentContainer}> 
                {/* <Text style={styles.text}> 
                    {this.state.choosenData}
                </Text> */}
                {/* <TouchableOpacity onPress={() => this.changeModalVisibility(true)} style={[styles.touchableHighlight, {backgroundColor:'orange'}]}
                 underlayColor={'#f1f1f1'}> 
                    <Text style={styles.text}> Open Modal </Text> */}
                    <Modal 
                        transparent={true} 
                        visible={this.state.isModalVisible} 
                        onRequestClose={() => this.changeModalVisibility(false)}
                        animationType='fade'>
                       {/* <Simplemodal changeModalVisibility={this.changeModalVisibility} /> */}
                    </Modal>
                {/* </TouchableOpacity> */}
             </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightblue'
    },
    modal:{
        height:'50%',
        marginTop:'6%',
       // paddingTop:10,
        alignSelf:'center',
        marginLeft:'26%',
       // alignItems:'center',
        textAlign: 'center',
        //justifyContent:'center',
        backgroundColor:'red',
        borderRadius:5,
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold'
    },
    touchableHighlight:{
        backgroundColor:'white',
        alignSelf:'stretch',
        alignItems:'center',
    },
    textView:{
        flex:1,
        alignItems:'center'
    },
    buttonView:{
        width:'100%',
        flexDirection:'row'
    }
})
