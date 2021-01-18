import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import React from 'react';
import {
	Animated,
	StyleSheet,
	View,
	Image,
	ImageBackground,
	Text,
	ScrollView,
	Dimensions,
} from 'react-native';
import { Props } from './types';

export const MetroStop = ({ route, navigation }: Props) => {

	const { stopName } = route.params;
	//const filePath = "../txt/" + stopName + ".json";
	const filePath = "../txt/clunylasorbonne.json"
	const jsonData = require(filePath);

	return (
		<ScrollView>
			<Text>
				{jsonData.text}
			</Text>
		</ScrollView>


	);
}

const styles = StyleSheet.create({
	container: {

	},
});