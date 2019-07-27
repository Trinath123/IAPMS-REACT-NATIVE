import {StyleSheet} from 'react-native'
import { red } from 'ansi-colors';

const styles = StyleSheet.create({
    container:{
      flex: 1,  
      // alignItems:'center',
      // justifyContent: 'center',
      
    },
    preventiveScreen: {
      flex:0.4,
      width: '100%',
      //borderWidth: 1,
      alignItems:'center',
      justifyContent: 'center',
      //borderRadius:10
      //backgroundColor:'blue'
    },
    dateScreen: {
      flex: 0.25,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
     // marginTop:10,
   // backgroundColor:'pink'
    },
    dateLabelBox: {
      height: '100%',
      width: '30%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight:'2%'
    },
    dateLabel: {
      fontSize:21,
      color:'darkblue',
    },
    buttonScreen:
    {
      flex: 0.25,
      width: '100%',
      alignItems:'center',
     // justifyContent: 'center',
     // backgroundColor:'red'
    },
    getbuttonScreen:{
      justifyContent: 'center',
      alignItems:'center',
       width: '80%',
       height:'100%',
       //backgroundColor:'blue'
    },
    getbutton:{
      width: '29%',
      height:'70%',
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'#bfbec1',
      borderRadius:4,
    },
    buttonText:{
      alignItems:'center',
      color:'#555555',
      //fontWeight:'bold',
      fontSize:21,
    },
  flatlistScreen:{
    flex:0.6,
    // marginTop:20
    //backgroundColor:'blue'
  },
header: {
    flexDirection: 'column',
    backgroundColor: '#8ed1fc',
    justifyContent: 'flex-start',
    // justifyContent:'center',
    // alignItems:'center',
},
header1: {
    // justifyContent:'center',
    // alignItems:'center',
    flexDirection: 'column',
    backgroundColor: '#f5fcff',
    justifyContent: 'flex-start',
},                                           
textsty1: {
    fontSize: 20,
    color: 'red',
    marginBottom: 1,
    marginTop: 1,
    textAlign: 'left',
    width: '100%',
    //color: 'darkblue',
    backgroundColor:'blue',
},
textsty2: {
    fontSize: 20,
    color: 'green',
    marginBottom: 1,
    marginTop: 1,
    textAlign: 'left',
    width: '100%'
},
textsty3: {
    fontSize: 20,
    color: 'black',
    marginBottom: 1,
    marginTop: 1,
    textAlign: 'left',
    width: '100%'
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
    width: 100
},
headtext2: {
    fontSize: 20,
    color: '#FDFBF9',
    marginBottom: 10,
    marginTop: 10, 
    textAlign: 'left',
    width: 100
},
headtext3: {
    fontSize: 20,
    color: '#FDFBF9',
    marginBottom: 10,
    marginTop: 10, 
    textAlign: 'left',
    width: 150
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
 },
 htext1:{
  fontSize: 20,
  color: 'red',
  marginBottom: 1,
  marginTop: 1,
  textAlign: 'left',
  width: '100%'
 }
});
  export default styles;