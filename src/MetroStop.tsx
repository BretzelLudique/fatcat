
import React from 'react';
import {
	StyleSheet,
	Text,
	ScrollView,
} from 'react-native';
import { Props } from './types';

export const MetroStop = ({ route }: Props) => {

	const { stopName } = route.params;

	const text = require("../assets/txt/NamedEmpty.json");

	return (
		<ScrollView>
			<Text
			style={styles.text}>
				Ici c'est {stopName} !
				{"\n\n\n\n\n\n"}
				{text[stopName] == "" && stopName + "  est en cours de pitoufaction... Revenez plus tard !"}
				{text[stopName] != "" && text[stopName]}
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