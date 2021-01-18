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
	const bigjson = require("../txt/big.json")

	return (
		<ScrollView>
			<Text>
				{bigjson.text9492}
			</Text>
		</ScrollView>


	);
}

const styles = StyleSheet.create({
	container: {

	},
});