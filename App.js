
import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./screen/Home"
import MockTest from "./screen/Mocktest"
import Aptitude from "./screen/Aptitude"

import Tabs from './navigations/tabs';


const Stack = createStackNavigator();

export default function App({ navigation, route }) {

	if (route.state && route.state.index > 0) {
		navigation.createStackNavigator({ tabBarVisible: false })
	} else {
		navigation.screenOptions({ tabBarVisible: true })
	}
	return (
		<NavigationContainer>

			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={Home} >

				<Stack.Screen name="home" component={Tabs} />
				<Stack.Screen name="mock test" component={MockTest} />
				<Stack.Screen name="aptitude" component={Aptitude} />
			</Stack.Navigator>




		</NavigationContainer>



	);
}

