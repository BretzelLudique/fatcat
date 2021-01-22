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
	const filePath = "../assets/txt/ligne1.json"
	const jsonData = require(filePath);

	return (
		<ScrollView>
			<Text
			style={styles.text}>
				Ici c'est {stopName} !
				{"\n\n\n\n\n\n"}
				Les textes ne sont pas encore tous prêts, voici celui de Cluny - La Sorbonne
				{"\n\n\n\n\n\n"}
				{/* {jsonData.text9492} */}
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