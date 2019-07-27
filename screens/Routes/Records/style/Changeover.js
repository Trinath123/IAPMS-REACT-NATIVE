import {StyleSheet} from 'react-native'
//import { white, blue } from 'ansi-colors';

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
     //justifyContent:'center',
     alignItems:'center',
    //backgroundColor:'red',
    marginTop:'1%',

  },
  resButContainer:{
    // width:'70%',
    // height:'60%',
    flex:0.09,
    alignItems:'center',
    justifyContent:'center',
   // backgroundColor:'yellow'
  },
  resButtcontainer:{
    flexDirection:'row',
    width:'60%',
    height:'90%',
    backgroundColor:'pink'
  },
  resButDate:{
    width:'50%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    borderWidth:1,
    borderColor:'blue',
    borderBottomLeftRadius:5,
    borderTopLeftRadius:5
  },
  resButDText:{
   // color:'white',
    fontSize:17,
    //backgroundColor:'red'
  },
  resButTText:{
    width:'50%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'blue',
    borderBottomRightRadius:5,
    borderTopRightRadius:5
  },
  resButtTest:{
   // color:'blue',
    fontSize:17
  },
  resDetContainer:{
    flex:1,
    //alignItems:'center',
    //justifyContent:'center',
    width:'99%',
   // borderWidth:1,
   // borderColor:'blue',
    marginTop:'1%',
   // backgroundColor:'red'
  }
});
export default styles;