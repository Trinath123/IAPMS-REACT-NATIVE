import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    userlistScreen: {
        flex:0.7,
        width: '100%',
        // borderWidth: 1,
        // borderRadius:10,
      // backgroundColor:'green'
      },
      totalshowScreen:{
        flex: 0.18,
        flexDirection: 'row',
       width:'100%',
       // marginTop:10,
       // backgroundColor:'pink'
      },
      showScreen: {
       alignItems:'center',
       flexDirection: 'row',
        width: '70%',
      // backgroundColor:'black'

      },
      showLabelBox: {
         paddingLeft:5,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      showLabel: {
        fontSize:20,
        color:'darkblue',   
        paddingRight: '2%'
      },
      showlabelScreen: {
        width: '60%',
        height:'70%',
        alignItems:'center',
         flexDirection: 'row',
       // backgroundColor:'yellow'
       
      },
      showInputBox: {
        height: '80%',
        width: '60%',
        justifyContent: 'center',
        backgroundColor:'#e5fdff',
        borderWidth: 1,
        borderColor: 'darkblue',
        paddingLeft: 3,
        borderRadius:3,
        flexDirection: 'row'
      },
      showTextinput: {
        height:'100%',
        width: '70%',
      },
      dropicons:{
        paddingRight:'3%',
        marginTop:'20%',
        color:'#85888b',
        fontSize:35
    },
      userShow: {
        height: '100%',
        width: '51%',
        borderWidth:1,
        borderColor: 'darkblue',
        paddingLeft: 3,
        borderRadius:3,
        justifyContent:'center',
        backgroundColor: 'white',
      },
      showScreen2: {
        position: 'absolute',
        top: 59,
        left: 0,
        height: '200%',
        width: '70%',
        alignItems:'center',
        flexDirection: 'row',
       // backgroundColor:'green',
        zIndex:2
      },
      showLabelBox2: {
        height: '100%',
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        //backgroundColor:'red'
      },
      showButton: {
        height: '17%',
         fontSize:10
        // backgroundColor: 'white',
      },
      entriesLabel: {
        fontSize:21,
        color:'darkblue',  
      },
    buttonScreen:{
      width: '30%',
      alignItems:'center',
      flexDirection: 'row',
      justifyContent: 'center',
      //backgroundColor:'blue'
    },
    createbutton:{
        width: '70%',
        height:'65%',
        alignItems:'center',
        backgroundColor:'#1d9a5a',
        borderRadius:10,
        padding:10,
    },
    buttonText:{
      alignItems:'center',
      color:'white',
      fontWeight:'bold',
      fontSize:20,
      },
      searchScreen: {
        flex: 0.15,
        width: '100%',
        height:'150%',
        alignItems:'center',
        flexDirection: 'row',
       //backgroundColor:'red'
      },
      searchLabelBox: {
        height: '100%',
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 4
      },
      searchLabel: {
        fontSize:20,
        color:'darkblue',
      },
      searchInputBox: {
        height: '65%',
        width: '60%',
       
      },
      searchTextinput: {
        height:'100%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'darkblue',
        borderRadius:3
      },
    flatlistScreen:{
         flex:0.3,
        // marginTop:15
      },
    header: {
      flexDirection: 'row',
      backgroundColor: '#8ed1fc',
      justifyContent: 'flex-start',
    },
    header1: {
        flexDirection: 'row',
        backgroundColor: '#f5fcff',
        justifyContent: 'flex-start'
    },
    textsty1: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'left',
        width: 200
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
        width: 250
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
        width: 50
    },
    headtext1: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, textAlign: 'left',
        width: 200
    },
    headtext2: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, textAlign: 'left',
        width: 150
    },
    headtext3: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, textAlign: 'left',
        width: 250
    },
    headtext4: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, textAlign: 'left',
        width: 150
    },
    headtext5: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, textAlign: 'left',
        width: 100
    },
    headtext6: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, textAlign: 'left',
        width: 50
    },
    
    data2:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'stretch'
    }

});
export default styles