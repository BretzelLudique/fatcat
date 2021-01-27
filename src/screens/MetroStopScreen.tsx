import React from 'react';
import {
	StyleSheet,
	Text,
	ScrollView,
	Image,
} from 'react-native';
import { NavProps } from '../types';
import { useTheme } from 'react-native-paper';
import { TitleImg } from '../components/stopscreen/TitleImg'
import {LinesIcons} from "../components/stopscreen/LinesIcons";

export const MetroStop = ({ route }: NavProps): JSX.Element => {

	const { name, line } = route.params;
	const text = require("../../assets/txt/ligne1.json");
	const { colors } = useTheme();

	return (
		<ScrollView style={styles.container}>
			{/* <TitleImg>
				<Text style={styles.title}>
					{name}
				</Text>
			</TitleImg> */}
			<Text style={styles.title}>
				{name}
			</Text>
			{LinesIcons(line)}
			<Text style={styles.body}>
				{"\n\n\n"}
				{line}
				{"\n\n\n"}

				{text[name] == "" && name + "  est en cours de pitoufaction... Revenez plus tard !"}
				{text[name] != "" && text[name]}
			</Text>
			{/* </Text> */}
		</ScrollView>


	);
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		flexDirection: "column",
	},
	title: {
		fontFamily: "ParisRegular",
		textAlign: 'center',
		fontSize: 30,
		color: "#014946",
		marginTop: 24,
	},
	body: {

	}
});
