import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    },
    logoutScreen: {
      flex: 0.4,
      width: '95%',
      borderWidth: 1,
      alignItems:'center',
      borderRadius:10
    },
    headerScreen: {
      flex: 0.2,
      width: '100%',
      alignItems:'center',
      marginTop: 16,
    },
    header: {
        fontSize:24,
        color:'black',
    },
    smallheaderScreen: {
      flex: 0.2,
      width: '100%',
      alignItems:'center',
      marginTop: 20,
    },
    smallheader: {
        fontSize:15,
        color:'black',
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
        height:'120%',
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
    });    
export default styles;