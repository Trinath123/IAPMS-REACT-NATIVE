import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems:'center',
      // justifyContent:'center',
      backgroundColor:'white'

    },
    BreakdownScreen: {
      flex:0.5,
      width: '100%',
      // borderWidth: 1,
       alignItems:'center',
      //borderRadius:10
      marginTop:'7%',
     // backgroundColor:'pink'
    },
    dropdownScreen: {
      flex: 0.4,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
     // backgroundColor:'yellow',
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
      width: '25%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: '2%'
    },
    dropLabel: {
      fontSize:18,
      color:'darkblue',
    },
    dropInputBox: {
      height: '65%',
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
      marginTop:'60%',
      color:'#85888b',
      fontSize:28
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
      top: 67,
      left: 0,
      height: '140%',
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
      //backgroundColor:'green',
      zIndex:2
    },
    dropScreen3: {
      position: 'absolute',
      top: 67,
      left: 0,
      height: '180%',
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
      //backgroundColor:'green',
      zIndex:2
    },
    dropLabelBox2: {
      height: '100%',
      width: '25%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      
    },
    dropButton: {
      height: '35%',
    },
    dropButton2: {
      height: '20%',
    },
    droptext:{
      fontSize:18
    },
    
    buttonScreen:
      {
        flex: 0.3,
        width: '100%',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'center',
        //backgroundColor:'cyan'
      },
      savebuttonScreen:{
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height:'100%',
        //backgroundColor:'blue'
        
      },
      savebutton:{
        width: '39%',
        height:'80%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'mediumslateblue',
        borderRadius:5,
    },
      buttonText:{
        alignItems:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
      },
    });
    export default styles;    