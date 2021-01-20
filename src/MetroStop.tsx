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
	const filePath = "../assets/txt/clunylasorbonne.json"
	const jsonData = require(filePath);
	const bigjson = require("../assets/txt/big.json")

	return (
		<ScrollView>
			<Text
			style={styles.text}>
				Ici c'est {stopName} !
				{"\n\n\n\n\n\n"}
				Les textes ne sont pas encore tous prêts, voici celui de Cluny - La Sorbonne
				{"\n\n\n\n\n\n"}
				{bigjson.text9492}
			</Text>
		</ScrollView>


	);
}

const styles = StyleSheet.create({
	container: {

	},
	text: {
		
	},
});