import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    forgotScreen: {
      flex: 0.5,
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
      borderTopRightRadius: 10
    },
    emailScreen: {
      flex: 0.3,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
      marginTop: 43,
    },
    emailLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 4
    },
    emailLabel: {
      fontSize:20,
      color:'darkblue',
    },
    emailInputBox: {
      height: '65%',
      width: '65%'
    },
    emailTextinput: {
      height:'100%',
      width: '100%',
      borderWidth: 1,
      borderColor: 'darkblue',
      paddingLeft: 3
    },
    buttonScreen:
    {
      flex: 0.2,
      width: '80%',
      alignItems:'center',
      marginTop: 12,
    },
    button:{
        width: '40%',
        height:'110%',
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:10,
        padding:6,
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    gotoScreen:{
      flex: 0.1,
      width: '80%',
      alignItems:'center',
    },
    signinText: { 
      marginTop: 15,
      fontSize:18,
     // fontWeight:'bold',
      color:'blue'
    },
    });
    export default styles;    