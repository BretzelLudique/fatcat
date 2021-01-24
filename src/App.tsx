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
import RootNavigation from './navigation/RootNavigation';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		//primary: 'tomato',
		//accent: 'yellow',
	},
};

const App = () => {
	return (
		<PaperProvider
			theme={theme}
		>
			<RootNavigation />
		</PaperProvider>
	);
};
export default App;
