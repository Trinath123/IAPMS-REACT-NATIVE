import React, {Component} from 'react';
import {  
    View,
    Image,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import styles from './styles/Welcome';
export default class Welcome extends Component{
    static navigationOptions ={
        header:null
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={styles.mainbody}>
                     <Image style={styles.imgsplash} source={require("./automation.jpg")}/>
                     <Text style={styles.ImageText}>
                         INDURSTIAL{"\n"}AUTOMATION{"\n"}SYSTEM
                      </Text> 
                </View>
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigate('DrawerNavigator')} 
              >
                <Text style={styles.buttonText}>
                  START 
                </Text>
             </TouchableOpacity>
            </View>
        )
    }
}
