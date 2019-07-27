import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    loginScreen: {
      flex: 0.6,
      width: '95%',
      borderWidth: 1,
      alignItems:'center',
      borderRadius:10
    },
    topScreen: {
      flex: 0.05,
      width: '100%',
      backgroundColor: 'blue',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
     // backgroundColor:'red'
    },
    screen: {
      flex:0.13,
     // marginTop:10
    },
    nameScreen: {
      flex: 0.2,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
     // backgroundColor:'yellow'
    },
    nameLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: '2%'
    },
    nameLabel: {
      fontSize:20,
      color:'darkblue',
    },
    nameInputBox: {
      height: '70%',
      width: '65%',
      justifyContent: 'center',
      backgroundColor:'#e5fdff',
      borderWidth: 1,
      borderColor: 'darkblue',
      paddingLeft: 3,
      borderRadius:3
    },
    nameTextinput: {
      height:'100%',
      width: '90%',
      fontSize:15
    },
    buttonScreen:
    {
      flex: 0.15,
      width: '100%',
      alignItems:'center',
      justifyContent: 'center',
     // backgroundColor:'pink'
    },
    button:{
        width: '33%',
        height:'90%',
        alignItems:'center',
        backgroundColor:'#1d9a5a',
        borderRadius:10,
        justifyContent:'center',
    },
    buttonText:{
      alignItems:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
    },
    resetScreen:{
      flex: 0.13,
      width: '80%',
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor:'green'
    },
    resetText: { 
      fontSize:18,
     // fontWeight:'bold',
      color:'blue'
    },
    signupScreen:{
      flex: 0.1,
      width: '80%',
      alignItems:'center',
     // backgroundColor:'green'
    },
    signupTextCont: {
      alignItems:'center',
      flexDirection:'row'
    },
    signupText: {
      fontSize:18, 
      color:'black',
      fontWeight:'bold', 
    },
    signupButton: { 
      fontSize:19,
      color:'blue',
      //fontWeight:'bold',
    },
    
});
export default styles;

