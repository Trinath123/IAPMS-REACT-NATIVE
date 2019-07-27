import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
    dispatchScreen: {
      flex:1,
      width: '100%',
      // borderWidth: 1,
       alignItems:'center',
      //borderRadius:10
     // backgroundColor:'green'
    },
    nameScreen: {
      flex: 0.12,
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
      height: '70%',
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