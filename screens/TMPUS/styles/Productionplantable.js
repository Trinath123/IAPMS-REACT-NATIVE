import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productionScreen: {
        flex: 1,
        width: '100%',
       // borderWidth: 1,
        alignItems:'center',
        //borderRadius:10
      },
      searchScreen: {
        flex: 0.1,
        width: '100%',
        alignItems:'center',
        flexDirection: 'row',
       // backgroundColor:'blue'
       // marginTop: 30,
      },
      searchLabelBox: {
        height: '100%',
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 4,
        //backgroundColor:'yellow'
      },
      searchLabel: {
        fontSize:21,
        color:'darkblue',
      },
      searchInputBox: {
        height: '70%',
        width: '50%',
       // justifyContent: 'center',
        backgroundColor:'#e5fdff',
        borderWidth: 1,
        borderColor: 'darkblue',
        paddingLeft: 3,
        borderRadius:3,
       // flexDirection: 'row'
       
      },
      searchTextinput: {
        height:'100%',
        width: '100%',
      },
    flatlistScreen:{
        flex:0.7,
       // marginTop:15
      },
    header: {
        flexDirection: 'row',
        backgroundColor: '#22bffc',
        justifyContent: 'flex-start',
    },
    header1: {
        flexDirection: 'row',
        backgroundColor: '#f5fcff',
        justifyContent: 'flex-start'
    },
    textsty1: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        width: 95
    },
    textsty2: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        width: 110
    },
    textsty3: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        width: 110
    },
    textsty4: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
       textAlign: 'center',
        width: 95
    },
    headtext1: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, 
        textAlign: 'left',
        width: 95,
       // marginLeft:10
    },
    headtext2: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, 
        textAlign: 'left',
        width: 110
    },
    headtext3: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'left',
        width: 110
    },
    headtext4: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'left',
        width: 95
    },
});
export default styles