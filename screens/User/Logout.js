
// import React, {Component} from 'react';
// import { 
//     View,
//     Text,
//     TouchableOpacity,
// } from 'react-native';
// import styles from './styles/Logout';

// export default class Forgotpass extends Component {
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={styles.container}>
//       <View style={styles.logoutScreen}>
//         <View style={styles.topScreen} />
//           <View style={styles.headerScreen}>
//             <Text style={styles.header}>You are successfully logged out</Text>
//           </View>
//           <View style={styles.smallheaderScreen}>
//             <Text style={styles.smallheader}>click on the below button to login again</Text>
//           </View>
//           <View style={styles.buttonScreen}>      
//               <TouchableOpacity 
//                 style={styles.button} 
//                 onPress={() => navigate('Changepass')} 
//               >
//                 <Text style={styles.buttonText}>
//                   Sign in 
//                 </Text>
//              </TouchableOpacity>
//           </View>
//       </View>         
//     </View>
//   );
// }
// }
import React, { Component } from 'react';
const { View, StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    },
    back: {
        width: 100,
        height: 500,
        backgroundColor: 'blue',
        zIndex: 0
    },
    front: {
        position: 'absolute',
        top:25,
        left:25,
        width: 200,
        height:200,
        backgroundColor: 'red',
        zIndex:1
    }
});

class Layers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.back}></View>
                <View style={styles.front}></View>
            </View>
        );
    }
}

module.exports = Layers;

