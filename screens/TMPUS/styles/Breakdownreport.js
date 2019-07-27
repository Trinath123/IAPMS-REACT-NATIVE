import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex: 1,  
      backgroundColor:'white',
       alignItems:'center',
       justifyContent: 'center',
       marginTop:'8%'
    },
    breakdownScreen: {
      flex: 1,
      width: '100%',
      alignItems:'center',
      //backgroundColor:'pink',
      //marginTop:'2%'
    },
    dateScreen: {
      flex: 0.14,
      width: '100%',
      alignItems:'center',
      flexDirection: 'row',
     // backgroundColor:'cyan',
    },
    dateLabelBox: {
      height: '100%',
      width: '26%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 8,
      paddingLeft:0
    },
    dateLabel: {
      fontSize:21,
      color:'darkblue',
    },
    buttonScreen:
    {
      flex: 0.13,
      width: '80%',
      alignItems:'center',
      flexDirection: 'row',
     // backgroundColor:'red',
      justifyContent: 'center',
    },
    searchbuttonScreen:{
      width: '50%',
      alignItems: 'flex-end',
      justifyContent: 'center',
     // backgroundColor:'blue'
    },
    savebuttonScreen:{
      width: '50%',
      justifyContent: 'center',
      alignItems:'center',
     // backgroundColor:'green'
    },
    searchbutton:{
        width: '55%',
        height:'80%',
        alignItems:'center',
        backgroundColor:'#00d084',
        borderRadius:10,
        padding:8,
  
    },
    savebutton:{
      width: '55%',
      height:'80%',
      alignItems:'center',
      backgroundColor:'#00bcd4',
      borderRadius:10,
      padding:8,
  },
  yearmonthScreen:{
    flex: 0.15,
    flexDirection: 'row',
    width:'100%',
   // backgroundColor:'yellow'
  },
  nameScreen: {
    alignItems:'center',
    flexDirection: 'row',
    width: '50%',
   // backgroundColor:'green'
  },
  nameLabelBox: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  nameLabel: {
    fontSize:20,
    color:'darkblue', 
    paddingRight: '2%'
  },
  dropInputBox: {
    height: '70%',
    width: '66%',
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
    width: '75%',
  },
  dropicons:{
    paddingRight:'7%',
    marginTop:'4%',
    color:'#85888b',
    fontSize:31
},
  userRoles: {
    height: '100%',
    width: '65%',
    borderWidth: 1,
    borderColor: 'darkblue',
    paddingLeft: 3,
    borderRadius:3,
    justifyContent:'center',
    backgroundColor: 'white',
  },
  dropScreen2: {
    position: 'absolute',
    top: 55,
    left: 0,
    height: '200%',
    width: '100%',
    alignItems:'center',
    flexDirection: 'row',
    //backgroundColor:'white',
    zIndex:2
  },
  dropLabelBox: {
    height: '100%',
    width: '22%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    
  },
  dropLabelBox2: {
    height: '100%',
    width: '30%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    
  },
  dropButton: {
    height: '17%',
    fontSize:10

  },
  flatlistScreen:{
    flex:0.5,
   // backgroundColor:'red'
  },
header: {
    flexDirection: 'row',
    backgroundColor: '#8ed1fc',
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