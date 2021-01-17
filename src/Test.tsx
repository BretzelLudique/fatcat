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


const win = Dimensions.get('window');
const ratio = win.width / 2268;

export const Test = ({ navigation }: Props) => {


	return (
		<ScrollView>
			<Text>
			Modernipsum dolor sit amet intervention art conceptual art nouveau realisme neo-impressionism, hard-edge painting surrealism modernism cubo-futurism luminism social realism. Socialist realism post-painterly abstraction naturalism tachisme existentialism, humanism barbizon school postmodern art abstract expressionism luminism, precisionism international gothic land art. Synchromism fluxus cloisonnism tonalism romanticism dada, realism op art lowbrow mannerism minimalism, existentialism post-minimalism ego-futurism neo-fauvism. Historicism classicism photorealism historicism superstroke neo-fauvism, romanesque surrealism eclecticism expressionism fluxus superstroke, carolingian op art new media art pop art. Hyperrealism russian futurism purism der blaue reiter maximalism land art biedermeier, stuckism pop art fluxus international gothic classicism. 
			</Text>
		</ScrollView>


	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e7e7e7',
		paddingBottom: 30,
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		//transform: [{ scale: scale }],
	},
	map2: {
		width: 2268,
		height: 2268,
	},
});