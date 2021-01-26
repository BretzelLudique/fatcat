import React from 'react';
import {
	StyleSheet,
	Text,
	ScrollView,
} from 'react-native';
import { NavProps } from '../types';
import { useTheme } from 'react-native-paper';

export const MetroStop = ({ route }: NavProps): JSX.Element => {

	const { stopName } = route.params;

	const text = require("../../assets/txt/ligne1.json");

	const { colors } = useTheme();

	return (
		<ScrollView>
			<Text
				style={
					//[
					styles.text
					//, 
					//{color:colors.primary}
					//]
				}>
				<Text style={styles.text}>
					Ici c'est {stopName} !
				</Text>
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
		fontFamily: 'serif',
		fontWeight: 'bold',
		fontSize: 15
	},
});
