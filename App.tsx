/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import {
	Button,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';

import { MapHomeScreen } from './src/MapHomeScreen';
import { Test } from './src/Test';


const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<RootStack.Screen
					name="MapHomeScreen"
					component={MapHomeScreen}
				//options={{ title: 'Welcome' }}
				/>
				<RootStack.Screen
					name='MetroStop'
					component={Test}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default App;
