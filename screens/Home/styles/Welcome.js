import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center', 
      },
      mainbody:{ 
          //flex:0.8,
          marginTop:100,
      },
      imgsplash:{
          width:270,
          height:250,
          borderRadius:5
      },
      ImageText:{
          fontSize:32,
          textAlign:'center',
          lineHeight:48,
          marginTop:20,
          color:'darkblue'
      },
      buttonScreen:
      {
        flex: 0.2,
        width: '80%',
        alignItems:'center',
        
      },
      button:{
          width: '35%',
          height:'7%',
          alignItems:'center',
          backgroundColor:'blue',
          borderRadius:10,
          padding:9,
          marginTop:30,
      },
      buttonText:{
        alignItems:'center',
          color:'#fff',
          fontWeight:'bold',
          fontSize:20,
      },
})
export default styles;