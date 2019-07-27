import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preventiveScreen: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        alignItems:'center',
        borderRadius:10
      },
      searchScreen: {
        flex: 0.2,
        width: '100%',
        alignItems:'center',
        flexDirection: 'row',
       // marginTop: 30,
      },
      searchLabelBox: {
        height: '100%',
        width: '20%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 4
      },
      searchLabel: {
        fontSize:22,
        color:'darkblue',
      },
      searchInputBox: {
        height: '50%',
        width: '50%',
       
      },
      searchTextinput: {
        height:'100%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'darkblue',
        borderRadius:3,
        paddingLeft:5,
        fontSize:18,
      },
    flatlistScreen:{
        flex:0.7,
        marginTop:15
      },
    header: {
        flexDirection: 'row',
        backgroundColor: '#23344e',
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
        width: 100
    },
    headtext1: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, 
        textAlign: 'left',
        width: 80,
        marginLeft:10
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
        width: 100
    },
    headtext4: {
        fontSize: 20,
        color: '#FDFBF9',
        marginBottom: 10,
        marginTop: 10, textAlign: 'left',
        width: 100
    },
});
export default styles