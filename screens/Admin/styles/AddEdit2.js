import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    adduserScreen: {
      flex: 0.8,
      width: '95%',
      //borderWidth: 1,
      alignItems:'center',
      borderRadius:10,
      //backgroundColor:'green'
    },
    nameScreen: {
      flex: 0.15,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
      //backgroundColor:'blue'
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
    },
    roleCatScreen: {
      flex: 0.15,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      //backgroundColor:'pink'
    },
    roleScreen: {
      height: '100%',
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
     
    },
    roleLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: '2%'
    },
    roleLabel: {
      fontSize:18,
      color:'darkblue',
    },
    roleInputBox: {
      height: '70%',
      width: '65%',
      justifyContent: 'center',
      backgroundColor:'#e5fdff',
      borderWidth: 1,
      borderColor: 'darkblue',
      paddingLeft: 3,
      borderRadius:3,
      flexDirection: 'row'
    },
    roleTextinput: {
      height:'100%',
      width: '90%',
    },
    dropicons:{
      paddingRight:'3%',
      marginTop:'28%',
      color:'#85888b',
      fontSize:35
  },
    userRoles: {
      height: '100%',
      width: '65%',
      borderWidth:1,
      borderColor: 'darkblue',
      paddingLeft: 3,
      borderRadius:3,
      justifyContent:'center',
       backgroundColor: 'white',
    },
    roleScreen2: {
      position: 'absolute',
      top: 59,
      left: 0,
      height: '200%',
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
     // backgroundColor:'green',
      zIndex:2
    },
    roleLabelBox2: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    categoryButton: {
      height: '17%',
       fontSize:10
      // width: '100%',
      // backgroundColor: 'white',
    },
    notificationScreen: {
      flex:0.25,
      width: '100%',
      alignItems:'center',
      justifyContent: 'center',
      paddingLeft: '2%',
      // marginTop:20
     // backgroundColor:'red'
    },
    checkboxScreen:{
      height: '30%',
      width: '100%',
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'row',
      // backgroundColor:'white'
    },
    checkbox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: '2%'
    },
    checkboxLabelScreen: {
      height: '100%',
      width: '70%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: '1%'
    },
    checkboxtextLabel:{
      fontSize:18,
    },
    buttonScreen:
      {
        flex: 0.15,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignItems:'center',
       // backgroundColor:'yellow'
      },
      button:{
          width: '25%',
          height:'75%',
          alignItems:'center',
          backgroundColor:'#7c39f8',
          borderRadius:10,
          padding:2,
      },
    });
    export default styles;    