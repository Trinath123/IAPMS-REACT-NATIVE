import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white'

    },
    productionScreen: {
      flex:1,
      width: '100%',
      // borderWidth: 1,
       alignItems:'center',
      //borderRadius:10
      marginTop:10
    },
    nameScreen: {
      flex: 0.11,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
     // backgroundColor:'blue'
    },
    nameLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: '2%'
    },
    nameLabel: {
      fontSize:18,
      color:'darkblue',
    },
    nameInputBox: {
      height: '85%',
      width: '65%',
      justifyContent: 'center',
      backgroundColor:'#e5fdff',
      borderWidth: 1,
      borderColor: 'black',
      paddingLeft: 3,
      borderRadius:5
    },
    nameTextinput: {
      height:'100%',
      width: '90%',
      fontSize:15
    },
    dropdownScreen: {
      flex: 0.12,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      //backgroundColor:'yellow',
    },
    dropScreen: {
      height: '100%',
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
      // backgroundColor:'pink'
    },
    dropLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: '2%'
    },
    dropLabel: {
      fontSize:18,
      color:'darkblue',
    },
    dropInputBox: {
      height: '78%',
      width: '65%',
      justifyContent: 'center',
      backgroundColor:'#e5fdff',
      borderWidth: 1,
      borderColor: 'black',
      paddingLeft: 3,
      borderRadius:5,
      flexDirection: 'row'
    },
    dropTextinput: {
      height:'100%',
      width: '90%',
      fontSize:18
    },
    dropicons:{
      paddingRight:'3%',
      marginTop:'20%',
      color:'#85888b',
      fontSize:35
  },
    userRoles: {
      height: '100%',
      width: '65%',
      borderWidth: 1,
      borderColor: 'darkblue',
      paddingLeft: 3,
      borderRadius:3,
      justifyContent:'center',
      backgroundColor: 'white',
    },
    dropScreen2: {
      position: 'absolute',
      top: 53,
      left: 0,
      height: '140%',
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
      //backgroundColor:'green',
      zIndex:2
    },
    dropLabelBox2: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      
    },
    dropButton: {
      height: '26%',
    },
    droptext:{
      fontSize:18
    },
    
    buttonScreen:
      {
        flex: 0.1,
        width: '100%',
        alignItems:'center',
        flexDirection: 'row',
       // backgroundColor:'pink'
      },
      savebuttonScreen:{
        alignItems:'center',
        width: '100%',
        height:'100%',
        //backgroundColor:'blue'
        
      },
      savebutton:{
        width: '29%',
        height:'80%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#6900ff',
        borderRadius:10,
    },
      buttonText:{
        alignItems:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:21,
      },
    });
    export default styles;    