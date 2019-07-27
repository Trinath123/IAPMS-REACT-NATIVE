import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
   // justifyContent: 'center',
  // backgroundColor: 'yellow'
  },
  preventiveScreen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    //backgroundColor: 'pink'
  },
  phaseScreen: {
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
   // backgroundColor: 'gray',
    justifyContent:'center'
  },
  OvalShapeView1: {
    width: 30,
    height: 35,
    backgroundColor: 'green',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderWidth: 1,
    marginLeft: 18,
    transform: [
      { scaleX: 2 }
    ]
  },
  OvalShapeView2: {
    width: 30,
    height: 35,
    backgroundColor: '#f8e504',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderWidth: 1,
    transform: [
      { scaleX: 2 }
    ]
  },
  OvalShapeView: {
    width: 31,
    height: 35,
    backgroundColor: '#d1d6da',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderWidth: 1,
    transform: [
      { scaleX: 2 }
    ]
  },
  linestyle: {
    height: 4,
    width: '13%',
    backgroundColor: "#d1d6da"
  },
  txt: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textScreen: {
    flex: 0.05,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    //backgroundColor: 'green'
  },
  txt1: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: -10,
    marginLeft: 10
  },
  flatlistScreen: {
    flex: 0.3,
    width:'100%',
   // backgroundColor:'red',
    marginTop:'2%',
   // height:'50%'
  },
  header: {
    flexDirection: 'row',
    width:'32%',
    height:'100%',
    backgroundColor:'#eaeaea',
    marginLeft:'5%'

  },
  header1: {
    flexDirection: 'row',
    backgroundColor: '#f5fcff',
    justifyContent: 'flex-start',
   // backgroundColor:'blue',

  },
  textsty1: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'left',
    width: 80,
    // backgroundColor:'blue',
    
  },
  textsty2: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'left',
    width: 150
  },
  textsty3: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'left',
    width: 100
  },
  textsty4: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'left',
    width: 100
  },
  headtext1: {
    fontSize:17,
    color: 'black',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'left',
    width: 80,
   marginLeft: '29%'
  //  backgroundColor:'blue',
  },
  headtext2: {
    fontSize:17,
    color: 'black',
    marginBottom: 5,
    marginTop: 5, 
    textAlign: 'left',
    width: 150,
    marginLeft: '33%'

    // backgroundColor:'blue',
  },
  headtext3: {
    fontSize:17,
    color: 'black',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'left',
    width: 100,
    marginLeft: '10%'

    // backgroundColor:'blue',
  },
  headtext4: {
    fontSize:17,
    color: 'black',
    marginBottom: 5,
    marginTop: 5, 
    textAlign: 'left',
    marginLeft: '2%',
    width: 120,
    // backgroundColor:'blue',
  },
  actionScreen: {
    flex: 0.13,
    width: '100%',
    alignItems: 'center',
    //backgroundColor:'cyan',
    justifyContent:'center',
    marginTop:'1%'
  },
  actionLabelBox: {
    height: '81%',
    width: '99%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    backgroundColor: '#fdf8e3',
    
  },
  actionLabel: {
    fontSize: 18,
    color: '#708392',
    marginTop: 10,
    marginBottom:1,
    textDecorationLine: 'underline',
    paddingLeft:10
  },
  checkScreen: {
    flex: 0.13,
    width: '100%',
    alignItems: 'center',
    //backgroundColor:'green',
    justifyContent:'center'
  },
  checkLabelBox: {
    height: '81%',
    width: '99%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    backgroundColor: '#dffbf0',
  },
  checkLabel: {
    fontSize: 18,
    color: '#708392',
    marginTop: 13,
    marginBottom:1,
    textDecorationLine: 'underline',
    paddingLeft:10
  },
  fieldScreen: {
    flex: 0.16,
    width: '100%',
    alignItems: 'center',
    //backgroundColor:'yellow',
    justifyContent:'center'
  },
  fieldLabelBox: {
    height: '80%',
    width: '99%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  fieldLabel: {
    fontSize: 18,
  },

  buttonScreen: {
    flex: 0.11,
    width: '100%',
     alignItems: 'center',
     justifyContent: 'space-evenly',
   // backgroundColor: 'blue',
    flexDirection:'row'
  },
  button: {
    width: '40%',
    height: '80%',
    alignItems: 'center',
    backgroundColor: 'mediumslateblue',
    justifyContent:'center',
    borderRadius: 5,
  },
  button1: {
    width: '25%',
    height: '80%',
    alignItems: 'center',
    backgroundColor: 'mediumslateblue',
    justifyContent:'center',
    borderRadius: 5,
  },
  button2: {
    width: '20%',
    height: '80%',
    alignItems: 'center',
    backgroundColor: 'mediumslateblue',
    justifyContent:'center',
    borderRadius: 5,
  },
  buttonText: {
    alignItems: 'center',
    color: '#fff',
   // fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
