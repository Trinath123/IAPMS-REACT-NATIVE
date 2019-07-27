import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

const styles = StyleSheet.create({
    myResultsIcone: {
        shadowColor: Colors.$shadowLightColor, // IOS
        shadowOffset: { height: 3, width: 2 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    }
});

export default styles;
