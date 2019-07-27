import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex: 1,  
       alignItems:'center',
       justifyContent: 'center',
       backgroundColor:'white'
      
    },
    toolScreen: {
      flex:0.2,
      width: '100%',
      alignItems:'center',
     // backgroundColor:'blue',
      flexDirection: 'row',
    },
    dropdownScreen: {
      width: '60%',
      height:'100%',
     // backgroundColor:'yellow',
      justifyContent:'center'
    },
    dropScreen: {
      height: '70%',
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
      justifyContent:'center',
     // backgroundColor:'pink'
    },
    dropInputBox: {
      height: '70%',
      width: '95%',
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
      paddingRight:'4%',
      marginTop:'5.5%',
      color:'#85888b',
      fontSize:31
  },
    userRoles: {
      height: '100%',
      width: '95%',
      borderWidth: 1,
      borderColor: 'darkblue',
      paddingLeft: 3,
      borderRadius:3,
      justifyContent:'center',
      backgroundColor: 'white',
    },
    dropScreen2: {
      position: 'absolute',
      top: 83,
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
      width: '3%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      
    },
    dropButton: {
      height: '23%',
    },
      droptext:{
        fontSize:18
    },
    buttonScreen: {
      width: '40%',
      height:'60%',
      alignItems: 'center',
      justifyContent: 'center',
     // backgroundColor: 'pink',
     // flexDirection:'row'
    },
    button: {
      width: '80%',
      height: '75%',
      alignItems: 'center',
      backgroundColor: '#5bc0de',
      justifyContent:'center',
      borderRadius: 5,
    },
    buttonText: {
      alignItems: 'center',
      color: '#fff',
     // fontWeight: 'bold',
      fontSize: 20,
    },
    flatlistScreen:{
      flex:0.5,
    },
  header: {
      flexDirection: 'row',
      backgroundColor: '#d4c4fb',
      justifyContent: 'flex-start',
     
  },
  header1: {
     
      flexDirection: 'row',
      backgroundColor: '#f5fcff',
      justifyContent: 'flex-start',
  },
  textsty1: {
      fontSize: 18,
      color: 'black',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 80
  },
  textsty2: {
      fontSize: 16,
      color: 'black',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 150
  },
  textsty3: {
      fontSize: 16,
      color: 'black',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 100
  },
  textsty4: {
      fontSize: 16,
      color: 'black',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 150
  },
  textsty5: {
      fontSize: 16,
      color: 'black',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 100
  },
  textsty6: {
      fontSize: 16,
      color: '#ff9800',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 100
  },
  headtext1: {
      fontSize: 20,
      color: '#FDFBF9',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 80
  },
  headtext2: {
      fontSize: 20,
      color: '#FDFBF9',
      marginBottom: 10,
      marginTop: 10, 
      textAlign: 'left',
      width: 150
  },
  headtext3: {
      fontSize: 20,
      color: '#FDFBF9',
      marginBottom: 10,
      marginTop: 10, 
      textAlign: 'left',
      width: 100
  },
  headtext4: {
      fontSize: 20,
      color: '#FDFBF9',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 150
  },
  headtext5: {
      fontSize: 20,
      color: '#FDFBF9',
      marginBottom: 10,
      marginTop: 10, 
      textAlign: 'left',
      width: 100
  },
  headtext6: {
      fontSize: 20,
      color: '#FDFBF9',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'left',
      width: 100
   }
});
  export default styles;