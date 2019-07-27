import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    changepassScreen: {
      flex: 0.6,
      width: '95%',
      borderWidth: 1,
      alignItems:'center',
      borderRadius:10
    },
    currentpassScreen: {
      flex: 0.2,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row'
    },
    currentpassLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 4
    },
    currentpassLabel: {
      fontSize:17,
      color:'darkblue',
    },
    currentpassInputBox: {
      height: '50%',
      width: '65%'
    },
    currentpassTextinput: {
      height:'100%',
      width: '100%',
      borderWidth: 1,
      borderColor: 'darkblue',
      paddingLeft: 3
    },
    newpasswordScreen: {
      flex: 0.2,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row'
    },
    newpasswordLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 4
    },
    newpasswordLabel: {
      fontSize:17,
      color:'darkblue',
    },
    newpasswordInputBox: {
      height: '50%',
      width: '65%',
    },
    newpasswordTextinput: {
      height:'100%',
      width: '100%',
      borderWidth: 1,
      borderColor: 'darkblue',
      paddingLeft: 3
    },
    confpasswordScreen: {
      flex: 0.2,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row'
    },
    confpasswordLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 4
    },
    confpasswordLabel: {
      fontSize:17,
      color:'darkblue',
    },
    confpasswordInputBox: {
      height: '50%',
      width: '65%',
    },
    confpasswordTextinput: {
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
    },
    button:{
        width: '40%',
        height:'60%',
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:10,
        padding:6,
        marginTop:20
    },
    buttonText:{
      alignItems:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:21,
    },
  });
  export default styles;