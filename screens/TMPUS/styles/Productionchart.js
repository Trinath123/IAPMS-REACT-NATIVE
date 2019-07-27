import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
   // justifyContent: 'center'
   backgroundColor:'white'
  },
  dropdownScreen: {
    flex: 0.15,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor:'yellow',
  },
  dropScreen: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
   // flexDirection: 'row',
    // backgroundColor:'pink'
  },
  dropInputBox: {
    height: '60%',
    width: '65%',
    justifyContent: 'center',
    backgroundColor: '#e5fdff',
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 3,
    borderRadius: 5,
    flexDirection: 'row'
  },
  dropTextinput: {
    height: '100%',
    width: '90%',
    fontSize: 18
  },
  dropicons: {
    paddingRight: '3%',
    marginTop: '1%',
    color: '#85888b',
    fontSize: 35
  },
  userRoles: {
    height: '100%',
    width: '65%',
    borderWidth: 1,
    borderColor: 'darkblue',
    paddingLeft: 3,
    borderRadius: 3,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  dropScreen2: {
    position: 'absolute',
    top: 71,
    left:0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor:'green',
    zIndex: 2
  },
  dropLabelBox2: {
    height: '100%',
    width: '18%',
    alignItems: 'flex-end',
    justifyContent: 'center',

  },
  dropButton: {
    height: '26%',
  },
  droptext: {
    fontSize: 18
  },
});
export default styles;    