import React from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import styles from './styles/MenuDrawer';
//import Productionplan from './Productionplan';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;




export default class MenuDrawer extends React.Component {
	navLink(nav, text) {
		return (
			<TouchableOpacity
				style={{ height: 50 }}
			//	onPress={() => this.productionplan(nav, text)}
				onPress={() => this.props.navigation.navigate(nav)}
				>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}

	// productionplan = (nav, val) => {	
	// 	if (val == 'Productionplan') {
	// 		var url = 'http://192.168.1.2:3001/api/Production';
	// 		fetch(url, {
	// 			method: 'GET',
	// 			headers: {
	// 				'Accept': 'application/json',
	// 				'Content-Type': 'application/json'
	// 			}
	// 		})
	// 		.then((response) => response.json())
	// 		.then((res) => {
	// 			if (res.success) {
	// 				this.props.navigation.navigate('ProductionPlan', 
	// 				{
	// 					productionplan: res.productionplan
	// 				});
	// 			}
	// 			//alert("You are successfull login");
	// 			// AsyncStorage.setItem('user',res.user)
	// 			//        this.props.navigation.navigate('Logout');
	// 		})
	// 		.done();
	// 	}
	// }
	
	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								<Image style={styles.img} source={require('../assets/logo.png')} />
							</View>
							<View style={styles.profileText}>
								<Text style={styles.name}>profile</Text>
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
					{this.navLink('ProductionPlan', 'Productionplan')}
						{this.navLink('ProductionplanTable','Productionplantable')}
						{this.navLink('ProductionTable','ProductionplanTable')}
						{this.navLink('Productionchart','Productionchart')}
						{this.navLink('Productionreport', 'Productionreport')}
						{this.navLink('Welcome', 'Welcome')}
						{this.navLink('Login', 'Login')}
						{this.navLink('AddEdit', 'AddEdit')}
						{this.navLink('AddEdit1', 'AddEdit1')}
						{this.navLink('AddEdit2', 'AddEdit2')}
						{this.navLink('Edituser', 'Edituser')}
						{this.navLink('Userlist', 'Userlist')}
						{this.navLink('Preventivemantns', 'Preventivemantns')}
						{this.navLink('Preventiveissues', 'Preventiveissues')}
						{this.navLink('Preventivereport', 'Preventivereport')}
						{this.navLink('Breakdownmantns', 'Breakdownmantns')}
						{this.navLink('Breakdownissues', 'Breakdownissues')}
						{this.navLink('Toolreplacement', 'Toolreplacement')}
						{this.navLink('Toolhistory', 'Toolhistory')}
						{this.navLink('Dispatchmonitoring', 'Dispatchmonitoring')}
						{this.navLink('Dispatchreport', 'Dispatchreport')}
						{this.navLink('Forgotpass', 'Forgotpass')}
						{this.navLink('Changepass', 'Changepass')}
						{this.navLink('Newpassinfo', 'Newpassinfo')}
						{this.navLink('Passwordinfo', 'Passwordinfo')}
						{this.navLink('Logout', 'Logout')}
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>version</Text>
					<Text style={styles.version}>v3.0</Text>
				</View>
			</View>
		)
	}
}

